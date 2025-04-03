import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { users } from "../db/schema/users.js";
import { userRoles } from "../db/schema/userRoles.js";
import { roles } from "../db/schema/roles.js";

export const getAllUsers = async (req, res) => {
  try {
    const usersList = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: roles.name,
      })
      .from(users)
      .innerJoin(userRoles, eq(users.id, userRoles.userId))
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .execute();

    res.status(200).json(usersList);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: roles.name,
      })
      .from(users)
      .innerJoin(userRoles, eq(users.id, userRoles.userId))
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(eq(users.id, id))
      .execute();

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await db
      .update(users)
      .set({ name, email })
      .where(eq(users.id, id))
      .returning()
      .execute();

    if (updatedUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser[0]);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { roleId } = req.body;
  try {
    const updatedRole = await db
      .update(userRoles)
      .set({ roleId })
      .where(eq(userRoles.userId, id))
      .returning()
      .execute();

    if (updatedRole.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedRole[0]);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
