import { pgTable, varchar, integer, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { juries } from "./juries";
import { applications } from "./applications";

export const evaluations = pgTable("evaluations", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  juryId: integer("jury_id")
    .references(() => juries.id)
    .notNull(),
  applicationId: integer("application_id")
    .references(() => applications.id)
    .notNull(),
  comment: text("comment").notNull(),
  decision: varchar("decision", { length: 255 }).notNull(),
  evaluationFilePath: varchar("evaluation_file_path", {
    length: 255,
  }).notNull(),
});

export const evaluationsRelations = relations(evaluations, ({ one }) => ({
  jury: one(juries, {
    fields: [evaluations.juryId],
    references: [juries.id],
  }),
  application: one(applications, {
    fields: [evaluations.applicationId],
    references: [applications.id],
  }),
}));
