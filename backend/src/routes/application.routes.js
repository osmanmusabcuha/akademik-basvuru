import express from "express";
import {
  getAllApplications,
  createApplication,
  getApplicationById,
  getApplicationsByUserId,
  getApplicationsByPostingId,
  updateApplicationStatus,
  putApplicationScore,
} from "../controller/applications.controller.js";

import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const applicationRouter = express.Router();

applicationRouter.get(
  "/",
  authenticateToken,
  authorizeRoles("yonetici", "admin", "juri"),
  getAllApplications
);

applicationRouter.post(
  "/",
  authenticateToken,
  authorizeRoles("aday"),
  createApplication
);

applicationRouter.get(
  "/user/:userId",
  authenticateToken,
  authorizeRoles("aday"),
  getApplicationsByUserId
);

applicationRouter.get(
  "/posting/:postingId",
  authenticateToken,
  authorizeRoles("yonetici", "admin", "juri"),
  getApplicationsByPostingId
);

applicationRouter.get("/:id", authenticateToken, getApplicationById);
applicationRouter.put(
  "/:id/status",
  authenticateToken,
  updateApplicationStatus
);
applicationRouter.put(
  "/:id/score",
  authenticateToken,
  authorizeRoles("yonetici", "admin", "juri"),
  putApplicationScore
);

export default applicationRouter;
