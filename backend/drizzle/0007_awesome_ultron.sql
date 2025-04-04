ALTER TABLE "users" ADD COLUMN "surname" varchar(255) DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "birth_year" integer DEFAULT 2000 NOT NULL;