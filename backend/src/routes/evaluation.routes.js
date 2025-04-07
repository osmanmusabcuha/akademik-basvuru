import express from "express";
import {
  createEvaluation,
  getEvaluationsByApplicationId,
} from "../controller/evaluations.controller.js";
import { uploadSingle } from "../middleware/upload.middleware.js";

const evaluationRouter = express.Router();

evaluationRouter.post("/", uploadSingle("file"), createEvaluation);
evaluationRouter.get(
  "/application/:applicationId",
  getEvaluationsByApplicationId
);

export default evaluationRouter;
