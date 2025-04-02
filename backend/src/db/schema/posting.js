import { integer, pgTable, varchar, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { faculties } from "./faculties.js";

export const posting = pgTable("posting", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  facultyId: integer("faculty_id")
    .references(() => faculties.id)
    .notNull(),
});

export const postingRelations = relations(posting, ({ one }) => ({
  faculty: one(faculties, {
    fields: [posting.facultyId],
    references: [faculties.id],
  }),
}));
