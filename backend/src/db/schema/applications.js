import { pgTable, integer, varchar, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users.js";
import { posting } from "./posting.js";

export const applications = pgTable("applications", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  postingId: integer("posting_id")
    .references(() => posting.id)
    .notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  applicationDate: date("application_date").notNull(),
  totalScore: integer("total_score").default(0),
});

export const applicationsRelations = relations(applications, ({ one }) => ({
  user: one(users, {
    fields: [applications.userId],
    references: [users.id],
  }),
  posting: one(posting, {
    fields: [applications.postingId],
    references: [posting.id],
  }),
}));
