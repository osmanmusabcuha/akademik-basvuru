import express from "express";
import {
  uploadAnswer,
  getAnswersByApplicationId,
  putScoreById,
} from "../controller/answers.controller.js";
import { uploadSingle } from "../middleware/upload.middleware.js";

const answersRouter = express.Router();

answersRouter.post("/upload", uploadSingle("file"), uploadAnswer);
answersRouter.get("/application/:applicationId", getAnswersByApplicationId);
answersRouter.put("/application/:applicationId/score", putScoreById);

export default answersRouter;
