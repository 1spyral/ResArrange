set names 'utf8';

create table "skill" ("id" serial primary key, "name" text not null);

create table "user" ("id" serial primary key, "name" text null, "phone" text null, "email" text not null, "linkedin" text null, "github" text null, "website" text null, "location" text null);
alter table "user" add constraint "user_email_unique" unique ("email");

create table "project" ("id" serial primary key, "title" text not null, "start_date" date not null, "end_date" date null, "description" text null, "points" text[] not null, "icon" text check ("icon" in ('github')) null, "website" text null, "user_id" int not null);

create table "project_skill" ("project_id" int not null, "skill_id" int not null, constraint "project_skill_pkey" primary key ("project_id", "skill_id"));

create table "experience" ("id" serial primary key, "company" text not null, "title" text not null, "location" text not null, "start_date" date not null, "end_date" date null, "description" text null, "points" text[] not null, "user_id" int not null);

create table "experience_skill" ("experience_id" int not null, "skill_id" int not null, constraint "experience_skill_pkey" primary key ("experience_id", "skill_id"));

create table "education" ("id" serial primary key, "institution" text not null, "degree" text not null, "location" text not null, "start_date" date not null, "end_date" date null, "description" text null, "points" text[] not null, "courses" text[] not null, "user_id" int not null);

create table "education_skill" ("education_id" int not null, "skill_id" int not null, constraint "education_skill_pkey" primary key ("education_id", "skill_id"));

create table "auth" ("user_id" int not null, "provider" text check ("provider" in ('password', 'google', 'github')) not null, "provider_user_id" text null, "username" text null, "password" text null, constraint "auth_pkey" primary key ("user_id"));

create table "user_skill" ("user_id" int not null, "skill_id" int not null, constraint "user_skill_pkey" primary key ("user_id", "skill_id"));

alter table "project" add constraint "project_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;

alter table "project_skill" add constraint "project_skill_project_id_foreign" foreign key ("project_id") references "project" ("id") on update cascade on delete cascade;
alter table "project_skill" add constraint "project_skill_skill_id_foreign" foreign key ("skill_id") references "skill" ("id") on update cascade on delete cascade;

alter table "experience" add constraint "experience_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;

alter table "experience_skill" add constraint "experience_skill_experience_id_foreign" foreign key ("experience_id") references "experience" ("id") on update cascade on delete cascade;
alter table "experience_skill" add constraint "experience_skill_skill_id_foreign" foreign key ("skill_id") references "skill" ("id") on update cascade on delete cascade;

alter table "education" add constraint "education_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;

alter table "education_skill" add constraint "education_skill_education_id_foreign" foreign key ("education_id") references "education" ("id") on update cascade on delete cascade;
alter table "education_skill" add constraint "education_skill_skill_id_foreign" foreign key ("skill_id") references "skill" ("id") on update cascade on delete cascade;

alter table "auth" add constraint "auth_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade on delete cascade;

alter table "user_skill" add constraint "user_skill_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade on delete cascade;
alter table "user_skill" add constraint "user_skill_skill_id_foreign" foreign key ("skill_id") references "skill" ("id") on update cascade on delete cascade;

