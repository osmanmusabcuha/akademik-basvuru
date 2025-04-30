import db from "../db/index.js";
import { eq, and } from "drizzle-orm";
import { applicationAnswers } from "../db/schema/applicationAnswers.js";
import { applicationQuestions } from "../db/schema/applicationQuestions.js";
import { applications } from "../db/schema/applications.js";
import minioClient from "../utils/minioClient.js";

export const uploadAnswer = async (req, res) => {
  const { applicationId, questionId, answer } = req.body;
  const { file } = req;

  if (!applicationId || !questionId || !answer) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  try {
    const bucketName = "answers";
    const found = await minioClient.bucketExists(bucketName);

    if (!found) {
      await minioClient.makeBucket(bucketName, "us-east-1");
    }

    const existingAnswer = await db
      .select()
      .from(applicationAnswers)
      .where(
        and(
          eq(applicationAnswers.applicationId, applicationId),
          eq(applicationAnswers.questionId, questionId)
        )
      )
      .execute();

    if (existingAnswer.length > 0) {
      return res.status(409).json({ message: "Answer already exists" });
    }

    const applicationQuestion = await db
      .select()
      .from(applicationQuestions)
      .where(eq(applicationQuestions.id, questionId))
      .execute();

    if (applicationQuestion.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }

    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, applicationId))
      .execute();

    if (application.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    const fileName = `app-id-${applicationId}/${questionId}-${Date.now()}`;

    await minioClient.putObject(bucketName, fileName, file.buffer);

    const fileUrl = `${bucketName}/${fileName}`;

    await db
      .insert(applicationAnswers)
      .values({
        applicationId,
        questionId,
        answer,
        filePath: fileUrl,
        score: applicationQuestion[0].maxScore,
      })
      .returning()
      .execute();

    res.status(201).json({
      message: "Answer uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAnswersByApplicationId = async (req, res) => {
  const { applicationId } = req.params;

  try {
    const answers = await db
      .select()
      .from(applicationAnswers)
      .where(eq(applicationAnswers.applicationId, applicationId))
      .execute();

    if (answers.length === 0) {
      return res.status(404).json({ message: "No answers found" });
    }

    const files = [];
    for (const answer of answers) {
      const answersUrl = answer.filePath;
      const bucketName = answersUrl.split("/")[0];
      const fileName = answersUrl.split("/").slice(1).join("/");

      try {
        const fileUrl = await minioClient.presignedUrl(
          "GET",
          bucketName,
          fileName,
          24 * 60 * 60 // 1 day
        );
        files.push({
          ...answer,
          filePath: fileUrl,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error generating file URL" });
      }
    }

    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const putScoreById = async (req, res) => {
  const { answerId } = req.params;
  const { score } = req.body;
  if (!score) {
    return res.status(400).json({ message: "Score is required" });
  }
  try {
    const answer = await db
      .select()
      .from(applicationAnswers)
      .where(eq(applicationAnswers.id, answerId))
      .execute();

    if (answer.length === 0) {
      return res.status(404).json({ message: "Answer not found" });
    }

    await db
      .update(applicationAnswers)
      .set({ score })
      .where(eq(applicationAnswers.id, answerId))
      .execute();

    res.status(200).json({
      message: "Score updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
