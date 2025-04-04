ALTER TABLE "application_answers" ALTER COLUMN "answer" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "application_answers" ALTER COLUMN "score" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "application_answers" ALTER COLUMN "file_path" DROP NOT NULL;