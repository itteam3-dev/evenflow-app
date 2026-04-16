import { pgTable, uuid, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// Enum for users table

export const roleEnum = pgEnum('role', ['USER', 'ORGANIZER', 'ADMIN']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  role: roleEnum('role').default('USER').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type IUser = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
