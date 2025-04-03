import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { faculties } from "../db/schema/faculties.js";

export const getAllFaculties = async (req, res) => {
  try {
    const facultiesList = await db.select().from(faculties).execute();

    res.status(200).json(facultiesList);
  } catch (error) {
    console.error("Error fetching faculties:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createFaculty = async (req, res) => {
  const { name } = req.body;

  try {
    const newFaculty = await db
      .insert(faculties)
      .values({
        name,
      })
      .returning()
      .execute();

    res.status(201).json(newFaculty);
  } catch (error) {
    console.error("Error creating faculty:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateFaculty = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedFaculty = await db
      .update(faculties)
      .set({
        name,
      })
      .where(eq(faculties.id, id))
      .returning()
      .execute();

    if (updatedFaculty.length === 0) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json(updatedFaculty[0]);
  } catch (error) {
    console.error("Error updating faculty:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
