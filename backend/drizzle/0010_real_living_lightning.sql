ALTER TABLE "application_documents" ADD COLUMN "score" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "total_score" integer DEFAULT 0;