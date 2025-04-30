import db from "../db/index.js";
import { eq, count } from "drizzle-orm";
import { applicationQuestions } from "../db/schema/applicationQuestions.js";

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await db.select().from(applicationQuestions);

    res.status(200).json({ questions });
  } catch (error) {
    console.error("Error fetching all questions:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await db
      .select()
      .from(applicationQuestions)
      .where(eq(applicationQuestions.id, id))
      .execute();

    if (question.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question[0]);
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
