SET client_min_messages TO warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

-- create table "public"."gyms" (
--   "gymId"             serial,
--   "name"              text  not null,
--   "address"           text  not null,
--   "type"              text  not null,
--   "imageURL"          text  not null,
--   "description"       text  not null,
--   primary key ("gymId")
-- );
-- create table "public"."users" (
--   "userId"                serial,
--   "username"              text  not null,
--   "hashedPassword"        text  not null,
--   primary key ("userId")
-- );
CREATE TABLE "public"."gyms" (
  "gymId" serial NOT NULL,
  "userId" integer NOT NULL,
  "name" text NOT NULL,
  "address" text NOT NULL,
  "type" text NOT NULL,
  "imageURL" text NOT NULL,
  "description" text NOT NULL,
  CONSTRAINT "gyms_pk" PRIMARY KEY ("gymId")
)
WITH (
  OIDS = FALSE
);

CREATE TABLE "public"."users" (
  "userId" serial NOT NULL,
  "username" text NOT NULL UNIQUE,
  "hashedPassword" text NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
)
WITH (
  OIDS = FALSE
);

ALTER TABLE "gyms"
  ADD CONSTRAINT "gyms_fk0" FOREIGN KEY ("userId") REFERENCES "users" ("userId");
