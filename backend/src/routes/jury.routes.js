import { Router } from "express";
import {
  assignJury,
  getJuriesByApplicationId,
  getJuriesByUserId,
} from "../controller/jury.controller.js";

const juryRouter = Router();

juryRouter.post("/", assignJury);
juryRouter.get("/application/:applicationId", getJuriesByApplicationId);
juryRouter.get("/user/:userId", getJuriesByUserId);

export default juryRouter;
