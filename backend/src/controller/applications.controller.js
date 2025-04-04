import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { applications } from "../db/schema/applications.js";
import { users } from "../db/schema/users.js";
import { posting } from "../db/schema/posting.js";

export const getAllApplications = async (req, res) => {
  try {
    const applicationsList = await db.select().from(applications).execute();

    res.status(200).json(applicationsList);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getApplicationById = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await db
      .select({
        id: applications.id,
        userId: applications.userId,
        userName: users.name,
        userEmail: users.email,
        postingId: applications.postingId,
        postingTitle: posting.title,
        status: applications.status,
        applicationDate: applications.applicationDate,
      })
      .from(applications)
      .innerJoin(users, eq(applications.userId, users.id))
      .innerJoin(posting, eq(applications.postingId, posting.id))
      .where(eq(applications.id, id))
      .execute();

    if (application.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application[0]);
  } catch (error) {
    console.error("Error fetching application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createApplication = async (req, res) => {
  const { userId, postingId, status, applicationDate } = req.body;

  try {
    const newApplication = await db
      .insert(applications)
      .values({
        userId,
        postingId,
        status,
        applicationDate,
      })
      .returning()
      .execute();

    res.status(201).json(newApplication[0]);
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedApplication = await db
      .update(applications)
      .set({ status })
      .where(eq(applications.id, id))
      .returning()
      .execute();

    if (updatedApplication.length === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(updatedApplication[0]);
  } catch (error) {
    console.error("Error updating application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
