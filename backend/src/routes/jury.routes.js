import { Router } from "express";
import {
  assignJury,
  getJuriesByPostingId,
  getJuriesByUserId,
} from "../controller/jury.controller.js";

const juryRouter = Router();

juryRouter.post("/", assignJury);
juryRouter.get("/posting/:postingId", getJuriesByPostingId);
juryRouter.get("/user/:userId", getJuriesByUserId);

export default juryRouter;
