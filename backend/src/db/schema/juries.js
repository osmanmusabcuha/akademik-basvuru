import { pgTable, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users.js";
import { posting } from "./posting.js";

export const juries = pgTable("juries", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  postingId: integer("posting_id")
    .references(() => posting.id)
    .notNull(),
});

export const juriesRelations = relations(juries, ({ one }) => ({
  user: one(users, {
    fields: [juries.userId],
    references: [users.id],
  }),
  posting: one(posting, {
    fields: [juries.postingId],
    references: [posting.id],
  }),
}));
