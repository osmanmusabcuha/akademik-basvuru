import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { posting } from "./posting.js";

export const postingRequirements = pgTable("posting_requirements", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  postingId: integer("posting_id")
    .references(() => posting.id)
    .notNull(),
  requirement: varchar("requirement", { length: 255 }).notNull(),
  requiredCount: integer("required_count").notNull(),
});

export const postingRequirementsRelations = relations(
  postingRequirements,
  ({ one }) => ({
    posting: one(posting, {
      fields: [postingRequirements.postingId],
      references: [posting.id],
    }),
  })
);
