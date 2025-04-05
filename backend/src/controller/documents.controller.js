import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { applicationDocuments } from "../db/schema/applicationDocuments.js";
import { uploadSingle } from "../middleware/upload.middleware.js";
import minioClient from "../utils/minioClient.js";

export const uploadDocument = async (req, res) => {
  const { applicationId, authorRole, documentType } = req.body;
  const { file } = req;

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  try {
    const bucketName = "documents";
    const found = await minioClient.bucketExists(bucketName);

    if (!found) {
      await minioClient.makeBucket(bucketName, "us-east-1");
    }

    const fileName = `app-id-${applicationId}/${documentType}-${Date.now()}`;

    await minioClient.putObject(bucketName, fileName, file.buffer);

    const fileUrl = `${bucketName}/${fileName}`;

    await db
      .insert(applicationDocuments)
      .values({
        applicationId,
        authorRole,
        documentType,
        documentUrl: fileUrl,
      })
      .returning()
      .execute();

    res.status(201).json({
      message: "Document uploaded successfully",
    });
  } catch (error) {
    console.error("Error creating posting:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getDocumentsByApplicationId = async (req, res) => {
  const { applicationId } = req.params;

  try {
    const documents = await db
      .select()
      .from(applicationDocuments)
      .where(eq(applicationDocuments.applicationId, applicationId))
      .execute();

    if (documents.length === 0) {
      return res.status(404).json({ message: "No documents found" });
    }

    const files = [];
    for (const document of documents) {
      const documentUrl = document.documentUrl;
      const bucketName = documentUrl.split("/")[0];
      const fileName = documentUrl.split("/").slice(1).join("/");

      try {
        const fileUrl = await minioClient.presignedUrl(
          "GET",
          bucketName,
          fileName,
          24 * 60 * 60 // 1 day expiration
        );
        files.push({
          ...document,
          documentUrl: fileUrl,
        });
      } catch (error) {
        console.error("Error retrieving file:", error);
        return res
          .status(500)
          .json({ message: "Internal server error", error: error.message });
      }
    }
    res.status(200).json(files);
  } catch (error) {
    console.error("Error retrieving documents:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
