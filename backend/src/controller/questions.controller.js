import db from "../db/index.js";
import { eq, count } from "drizzle-orm";
import { applicationQuestions } from "../db/schema/applicationQuestions.js";

export const getAllQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const questions = await db
      .select()
      .from(applicationQuestions)
      .limit(limit)
      .offset((page - 1) * limit);

    const totalQuestions = await db
      .select({ count: count() })
      .from(applicationQuestions);

    res.status(200).json({
      questions,
      pagination: {
        total: Number(totalQuestions[0].count),
        page,
        limit,
        totalPages: Math.ceil(Number(totalQuestions[0].count) / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
