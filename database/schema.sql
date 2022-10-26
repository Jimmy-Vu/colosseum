SET client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

CREATE TABLE "public"."gyms" (
	"userId" integer NOT NULL,
	"gymId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"geodata" TEXT NOT NULL,
	"type" TEXT NOT NULL,
	"imageURL" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "gyms_pk" PRIMARY KEY ("gymId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."reviews" (
	"reviewId" serial NOT NULL,
	"userId" integer NOT NULL,
	"username" TEXT NOT NULL,
	"gymId" integer NOT NULL,
	"rating" integer NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("reviewId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "gyms" ADD CONSTRAINT "gyms_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");


ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("gymId") REFERENCES "gyms"("gymId");
