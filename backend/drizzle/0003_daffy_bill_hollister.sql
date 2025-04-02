CREATE TABLE "application_answers" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "application_answers_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"application_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"answer" varchar(255) NOT NULL,
	"file_path" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "application_documents" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "application_documents_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"application_id" integer NOT NULL,
	"author_role" varchar(255) NOT NULL,
	"document_type" varchar(255) NOT NULL,
	"document_url" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "application_questions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "application_questions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"question" varchar(255) NOT NULL,
	"requires_file" boolean DEFAULT true NOT NULL,
	"section_name" varchar(255) NOT NULL,
	"min_score" integer DEFAULT 0,
	"max_score" integer
);
--> statement-breakpoint
CREATE TABLE "applications" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "applications_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"posting_id" integer NOT NULL,
	"status" varchar(255) NOT NULL,
	"application_date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "evaluations" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "evaluations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"jury_id" integer NOT NULL,
	"application_id" integer NOT NULL,
	"decision" varchar(255) NOT NULL,
	"evaluation_file_path" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faculties" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "faculties_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "juries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "juries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"posting_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "posting" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "posting_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"faculty_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "posting_requirements" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "posting_requirements_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"posting_id" integer NOT NULL,
	"requirement" varchar(255) NOT NULL,
	"required_count" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "application_answers" ADD CONSTRAINT "application_answers_application_id_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "application_answers" ADD CONSTRAINT "application_answers_question_id_application_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."application_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "application_documents" ADD CONSTRAINT "application_documents_application_id_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_posting_id_posting_id_fk" FOREIGN KEY ("posting_id") REFERENCES "public"."posting"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_jury_id_juries_id_fk" FOREIGN KEY ("jury_id") REFERENCES "public"."juries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_application_id_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "juries" ADD CONSTRAINT "juries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "juries" ADD CONSTRAINT "juries_posting_id_posting_id_fk" FOREIGN KEY ("posting_id") REFERENCES "public"."posting"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posting" ADD CONSTRAINT "posting_faculty_id_faculties_id_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculties"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posting_requirements" ADD CONSTRAINT "posting_requirements_posting_id_posting_id_fk" FOREIGN KEY ("posting_id") REFERENCES "public"."posting"("id") ON DELETE no action ON UPDATE no action;