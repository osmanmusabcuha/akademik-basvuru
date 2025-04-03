import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  updateUserRole,
} from "../controller/user.controller.js";

import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const userRouter = express.Router();

userRouter.get(
  "/",
  authenticateToken,
  authorizeRoles("yonetici", "admin"),
  getAllUsers
);
userRouter.get("/:id", authenticateToken, getUserById);
userRouter.put("/:id", authenticateToken, updateUser);
userRouter.put(
  "/role/:id",
  authenticateToken,
  authorizeRoles("yonetici", "admin"),
  updateUserRole
);

export default userRouter;
