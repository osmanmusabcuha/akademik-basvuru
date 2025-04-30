ALTER TABLE "juries" RENAME COLUMN "posting_id" TO "application_id";--> statement-breakpoint
ALTER TABLE "juries" DROP CONSTRAINT "juries_posting_id_posting_id_fk";
--> statement-breakpoint
ALTER TABLE "juries" ADD CONSTRAINT "juries_application_id_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE no action ON UPDATE no action;