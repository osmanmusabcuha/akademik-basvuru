import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { applications } from "./applications.js";
import { applicationQuestions } from "./applicationQuestions.js";

export const applicationAnswers = pgTable("application_answers", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  applicationId: integer("application_id")
    .references(() => applications.id)
    .notNull(),
  questionId: integer("question_id")
    .references(() => applicationQuestions.id)
    .notNull(),
  answer: varchar("answer", { length: 255 }).notNull(),
  filePath: varchar("file_path", { length: 255 }).notNull(),
});

export const applicationAnswersRelations = relations(
  applicationAnswers,
  ({ one }) => ({
    application: one(applications, {
      fields: [applicationAnswers.applicationId],
      references: [applications.id],
    }),
    question: one(applicationQuestions, {
      fields: [applicationAnswers.questionId],
      references: [applicationQuestions.id],
    }),
  })
);
