import { seedFaculties } from "./faculties.seed.js";
import { seedRoles } from "./roles.seed.js";
import { seedApplicationQuestions } from "./questions.seed.js";

const runSeeds = async () => {
  try {
    await seedRoles();
    await seedFaculties();
    await seedApplicationQuestions();
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

runSeeds();
