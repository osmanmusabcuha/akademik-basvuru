import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const faculties = pgTable("faculties", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
});
