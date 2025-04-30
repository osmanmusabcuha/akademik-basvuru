import { applicationQuestions } from "../schema/applicationQuestions.js";
import questionData from "./data/question.data.js";
import db from "../index.js";

export const seedApplicationQuestions = async () => {
  console.log("Checking if application questions table already exist...");

  const existingQuestions = await db.select().from(applicationQuestions);

  if (existingQuestions.length > 0) {
    console.log("Application questions already exist, skipping seeding.");
    return;
  }

  await db.insert(applicationQuestions).values(questionData);
  console.log("Application questions seeded successfully");
};
