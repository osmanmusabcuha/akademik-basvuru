import express from "express";
import {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplicationStatus,
} from "../controller/applications.controller.js";

import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const applicationRouter = express.Router();

applicationRouter.get(
  "/",
  authenticateToken,
  authorizeRoles("yonetici", "admin"),
  getAllApplications
);
applicationRouter.post(
  "/",
  authenticateToken,
  authorizeRoles("aday"),
  createApplication
);
applicationRouter.get("/:id", authenticateToken, getApplicationById);
applicationRouter.put(
  "/:id/status",
  authenticateToken,
  updateApplicationStatus
);

export default applicationRouter;
