import { integer, pgTable, varchar, boolean, text } from "drizzle-orm/pg-core";

export const applicationQuestions = pgTable("application_questions", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  question: text("question").notNull(),
  requiresFile: boolean("requires_file").notNull().default(true),
  sectionName: varchar("section_name", { length: 255 }).notNull(),
  minScore: integer("min_score").default(0),
  maxScore: integer("max_score"),
});
