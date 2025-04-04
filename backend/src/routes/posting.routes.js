import { Router } from "express";
import {
  getAllPostings,
  getPostById,
  createPosting,
  updatePosting,
  createPostingRequirements,
} from "../controller/posting.controller.js";

const postingRouter = Router();

postingRouter.get("/", getAllPostings);
postingRouter.get("/:id", getPostById);
postingRouter.post("/", createPosting);
postingRouter.put("/:id", updatePosting);
postingRouter.post("/requirements", createPostingRequirements);

export default postingRouter;
