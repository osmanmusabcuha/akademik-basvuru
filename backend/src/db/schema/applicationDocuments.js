import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { applications } from "./applications.js";

export const applicationDocuments = pgTable("application_documents", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  applicationId: integer("application_id")
    .references(() => applications.id)
    .notNull(),
  authorRole: varchar("author_role", { length: 255 }).notNull(),
  documentType: varchar("document_type", { length: 255 }).notNull(),
  documentUrl: varchar("document_url", { length: 255 }).notNull(),
  score: integer("score").default(0),
});

export const applicationDocumentsRelations = relations(
  applications,
  ({ one }) => ({
    application: one(applications, {
      fields: [applicationDocuments.applicationId],
      references: [applications.id],
    }),
  })
);
