import { Router } from "express";
import {
  getAllFaculties,
  createFaculty,
  updateFaculty,
} from "../controller/faculty.controller.js";

import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const facultyRouter = Router();

facultyRouter.get("/", authenticateToken, getAllFaculties);
facultyRouter.post(
  "/",
  authenticateToken,
  authorizeRoles("admin", "yonetici"),
  createFaculty
);
facultyRouter.put(
  "/:id",
  authenticateToken,
  authorizeRoles("admin", "yonetici"),
  updateFaculty
);

export default facultyRouter;
