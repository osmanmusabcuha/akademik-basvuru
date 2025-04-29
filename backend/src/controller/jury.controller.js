import db from "../db/index.js";
import { eq, and } from "drizzle-orm";
import { applications } from "../db/schema/applications.js";
import { users } from "../db/schema/users.js";
import { roles } from "../db/schema/roles.js";
import { userRoles } from "../db/schema/userRoles.js";
import { juries } from "../db/schema/juries.js";

export const assignJury = async (req, res) => {
  const { applicationId, userId } = req.body;

  try {
    const userResult = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: roles.name,
      })
      .from(users)
      .innerJoin(userRoles, eq(users.id, userRoles.userId))
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(and(eq(roles.name, "juri"), eq(users.id, userId)));

    if (userResult.length === 0) {
      return res
        .status(404)
        .json({ message: "User not found or not a jury member" });
    }
    console.log("User found:", userResult[0]);
    const applicationResult = await db
      .select({
        id: applications.id,
      })
      .from(applications)
      .where(eq(applications.id, applicationId));

    if (applicationResult.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    const existingJury = await db
      .select()
      .from(juries)
      .where(
        and(eq(juries.applicationId, applicationId), eq(juries.userId, userId))
      );

    if (existingJury.length > 0) {
      return res.status(409).json({ message: "Jury already assigned" });
    }

    await db.insert(juries).values({
      applicationId,
      userId,
    });

    res.status(201).json({
      message: "Jury assigned successfully",
      jury: {
        applicationId,
        userId,
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const getJuriesByApplicationId = async (req, res) => {
  const { applicationId } = req.params;

  try {
    const juryResult = await db
      .select({
        id: juries.id,
        userId: juries.userId,
        applicationId: juries.applicationId,
        name: users.name,
        email: users.email,
      })
      .from(juries)
      .innerJoin(users, eq(juries.userId, users.id))
      .where(eq(juries.applicationId, applicationId));

    if (juryResult.length === 0) {
      return res.status(404).json({ message: "No jury members found" });
    }

    res.status(200).json(juryResult);
  } catch (error) {
    console.error("Error fetching jury members:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export const getJuriesByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const juryResult = await db
      .select({
        id: juries.id,
        userId: juries.userId,
        applicationId: juries.applicationId,
        status: applications.status,
      })
      .from(juries)
      .innerJoin(applications, eq(juries.applicationId, applications.id))
      .where(eq(juries.userId, userId));

    if (juryResult.length === 0) {
      return res.status(404).json({ message: "No jury members found" });
    }

    res.status(200).json(juryResult);
  } catch (error) {
    console.error("Error fetching jury members:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
