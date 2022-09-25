set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."gyms" (
  "gymId"             serial,
  "name"              text  not null,
  "address"           text  not null,
  "type"              text  not null,
  "imageURL"          text  not null,
  "description"       text  not null,
  primary key ("gymId")
)
