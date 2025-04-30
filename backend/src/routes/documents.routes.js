import express from "express";
import {
  uploadDocument,
  getDocumentsByApplicationId,
  putScoreDocumentById,
} from "../controller/documents.controller.js";
import { uploadSingle } from "../middleware/upload.middleware.js";

const documentsRouter = express.Router();

documentsRouter.post("/upload", uploadSingle("file"), uploadDocument);
documentsRouter.get("/application/:applicationId", getDocumentsByApplicationId);
documentsRouter.put("/:documentId", putScoreDocumentById);

export default documentsRouter;
