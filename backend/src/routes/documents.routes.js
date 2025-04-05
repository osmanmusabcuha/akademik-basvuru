import express from "express";
import {
  uploadDocument,
  getDocumentsByApplicationId,
} from "../controller/documents.controller.js";
import { uploadSingle } from "../middleware/upload.middleware.js";

const documentsRouter = express.Router();

documentsRouter.post("/upload", uploadSingle("file"), uploadDocument);
documentsRouter.get("/application/:applicationId", getDocumentsByApplicationId);

export default documentsRouter;
