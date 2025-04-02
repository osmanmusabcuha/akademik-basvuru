import { seedFaculties } from "./faculties.seed.js";
import { seedRoles } from "./roles.seed.js";

const runSeeds = async () => {
  try {
    await seedRoles();
    await seedFaculties();
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

runSeeds();
