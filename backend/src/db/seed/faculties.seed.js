import { faculties } from "../schema/faculties.js";
import facultiesData from "./data/faculties.data.js";
import db from "../index.js";

export const seedFaculties = async () => {
  console.log("Checking if faculties table already exist...");

  const existingFaculties = await db.select().from(faculties);

  if (existingFaculties.length > 0) {
    console.log("Faculties already exist, skipping seeding.");
    return;
  }

  await db.insert(faculties).values(facultiesData);
  console.log("Faculties seeded successfully");
};
