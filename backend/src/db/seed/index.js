import { seedRoles } from "./roles.seed.js";

const runSeeds = async () => {
  try {
    await seedRoles();
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

runSeeds();
