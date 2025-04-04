import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { posting } from "../db/schema/posting.js";
import { faculties } from "../db/schema/faculties.js";
import { postingRequirements } from "../db/schema/postingRequirements.js";

export const getAllPostings = async (req, res) => {
  try {
    const postingsList = await db
      .select({
        id: posting.id,
        title: posting.title,
        category: posting.category,
        facultyName: faculties.name,
        startDate: posting.startDate,
        endDate: posting.endDate,
      })
      .from(posting)
      .innerJoin(faculties, eq(posting.facultyId, faculties.id))
      .execute();

    const postingRequirementsList = await db
      .select()
      .from(postingRequirements)
      .execute();

    const postingsWithRequirements = postingsList.map((posting) => {
      const requirements = postingRequirementsList
        .filter((req) => req.postingId === posting.id)
        .map((req) => ({
          requirement: req.requirement,
          requiredCount: req.requiredCount,
        }));
      return {
        ...posting,
        requirements,
      };
    });

    res.status(200).json(postingsWithRequirements);
  } catch (error) {
    console.error("Error fetching postings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPosting = async (req, res) => {
  const { title, category, startDate, endDate, facultyName } = req.body;
  try {
    const faculty = await db
      .select()
      .from(faculties)
      .where(eq(faculties.name, facultyName))
      .execute();

    if (faculty.length === 0) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    const newPosting = await db
      .insert(posting)
      .values({
        title,
        category,
        startDate,
        endDate,
        facultyId: faculty[0].id,
      })
      .returning()
      .execute();

    res.status(201).json(newPosting);
  } catch (error) {
    console.error("Error creating posting:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePosting = async (req, res) => {
  const { id } = req.params;
  const { title, category, startDate, endDate, facultyName } = req.body;

  try {
    const faculty = await db
      .select()
      .from(faculties)
      .where(eq(faculties.name, facultyName))
      .execute();

    if (faculty.length === 0) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    const updatedPosting = await db
      .update(posting)
      .set({
        title,
        category,
        startDate,
        endDate,
        facultyId: faculty[0].id,
      })
      .where(eq(posting.id, id))
      .returning()
      .execute();

    if (updatedPosting.length === 0) {
      return res.status(404).json({ message: "Posting not found" });
    }

    res.status(200).json(updatedPosting[0]);
  } catch (error) {
    console.error("Error updating posting:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const postingRequirementsList = await db
      .select()
      .from(postingRequirements)
      .execute();

    const postingDetails = await db
      .select({
        id: posting.id,
        title: posting.title,
        category: posting.category,
        startDate: posting.startDate,
        endDate: posting.endDate,
        facultyName: faculties.name,
      })
      .from(posting)
      .innerJoin(faculties, eq(posting.facultyId, faculties.id))
      .where(eq(posting.id, id))
      .execute();

    const requirements = postingRequirementsList
      .filter((req) => id == req.postingId)
      .map((req) => ({
        requirement: req.requirement,
        requiredCount: req.requiredCount,
      }));

    if (postingDetails.length > 0) {
      postingDetails[0].requirements = requirements;
    }

    if (postingDetails.length === 0) {
      return res.status(404).json({ message: "Posting not found" });
    }

    res.status(200).json(postingDetails[0]);
  } catch (error) {
    console.error("Error fetching posting details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPostingRequirements = async (req, res) => {
  const { postingId, requirement, requiredCount } = req.body;

  try {
    const newRequirement = await db
      .insert(postingRequirements)
      .values({
        postingId,
        requirement,
        requiredCount,
      })
      .returning()
      .execute();

    res.status(201).json(newRequirement);
  } catch (error) {
    console.error("Error creating posting requirement:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
