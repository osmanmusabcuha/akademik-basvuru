import { roles } from "../schema/roles.js";
import rolesData from "./data/roles.data.js";
import db from "../index.js";

export const seedRoles = async () => {
  console.log("Checking if roles table already exist...");

  const existingRoles = await db.select().from(roles);

  if (existingRoles.length > 0) {
    console.log("Roles already exist, skipping seeding.");
    return;
  }

  await db.insert(roles).values(rolesData);
  console.log("Roles seeded successfully");
};
