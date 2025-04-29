import { pgTable, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users.js";
import { posting } from "./posting.js";
import { applications } from "./applications.js";

export const juries = pgTable("juries", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  applicationId: integer("application_id")
    .references(() => applications.id)
    .notNull(),
});

export const juriesRelations = relations(juries, ({ one }) => ({
  user: one(users, {
    fields: [juries.userId],
    references: [users.id],
  }),
  application: one(applications, {
    fields: [juries.applicationId],
    references: [applications.id],
  }),
}));
