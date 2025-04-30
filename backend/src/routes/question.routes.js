import express from "express";
import {
  getAllQuestions,
  getQuestionById,
} from "../controller/questions.controller.js";

const questionRouter = express.Router();

questionRouter.get("/", getAllQuestions);
questionRouter.get("/:id", getQuestionById);

export default questionRouter;
