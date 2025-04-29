import db from "../db/index.js";
import { eq, and } from "drizzle-orm";
import { evaluations } from "../db/schema/evaluations.js";
import { applications } from "../db/schema/applications.js";
import { juries } from "../db/schema/juries.js";
import minioClient from "../utils/minioClient.js";

export const createEvaluation = async (req, res) => {
  const { applicationId, juryId, comment, decision } = req.body;
  const { file } = req;

  if (!applicationId || !juryId || !comment || !decision) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  try {
    const existingEvaluation = await db
      .select()
      .from(evaluations)
      .where(
        and(
          eq(evaluations.applicationId, applicationId),
          eq(evaluations.juryId, juryId)
        )
      )
      .execute();

    if (existingEvaluation.length > 0) {
      return res.status(409).json({ message: "Evaluation already exists" });
    }

    const juryResult = await db
      .select()
      .from(juries)
      .where(eq(juries.id, juryId))
      .execute();

    if (juryResult.length === 0) {
      return res.status(404).json({ message: "Jury not found" });
    }

    const applicationResult = await db
      .select()
      .from(applications)
      .where(eq(applications.id, applicationId))
      .execute();

    if (applicationResult.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    const bucketName = "evaluations";
    const found = await minioClient.bucketExists(bucketName);

    if (!found) {
      await minioClient.makeBucket(bucketName, "us-east-1");
    }

    const fileName = `app-id-${applicationId}/${juryId}-${Date.now()}`;

    await minioClient.putObject(bucketName, fileName, file.buffer);
    const fileUrl = `${bucketName}/${fileName}`;

    await db
      .insert(evaluations)
      .values({
        applicationId,
        juryId,
        comment,
        decision,
        evaluationFilePath: fileUrl,
      })
      .returning()
      .execute();

    res.status(201).json({
      message: "Evaluation created successfully",
    });
  } catch (error) {
    console.error("Error creating evaluation:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getEvaluationsByApplicationId = async (req, res) => {
  const { applicationId } = req.params;

  try {
    const evaluationsResult = await db
      .select()
      .from(evaluations)
      .where(eq(evaluations.applicationId, applicationId))
      .execute();

    if (evaluationsResult.length === 0) {
      return res.status(404).json({ message: "No evaluations found" });
    }

    const files = [];
    for (const evaluation of evaluationsResult) {
      const fileUrl = evaluation.evaluationFilePath;
      const bucketName = fileUrl.split("/")[0];
      const fileName = fileUrl.split("/").slice(1).join("/");

      try {
        const fileUrl = await minioClient.presignedUrl(
          "GET",
          bucketName,
          fileName,
          24 * 60 * 60 // 24 hours
        );
        files.push({
          ...evaluation,
          evaluationFilePath: fileUrl,
        });
      } catch (error) {
        console.error("Error generating presigned URL:", error);
        return res
          .status(500)
          .json({ message: "Internal server error", error: error.message });
      }
    }

    res.status(200).json(files);
  } catch (error) {
    console.error("Error fetching evaluations:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
