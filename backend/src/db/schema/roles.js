import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
});
