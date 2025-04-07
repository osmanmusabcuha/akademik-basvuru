import express from "express";
import { getAllQuestions } from "../controller/questions.controller.js";

const questionRouter = express.Router();

questionRouter.get("/", getAllQuestions);

export default questionRouter;
