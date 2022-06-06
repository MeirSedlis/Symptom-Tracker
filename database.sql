
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
	
CREATE TABLE "diagnosis_list" (
	id SERIAL PRIMARY KEY,
	diagnosis VARCHAR (255) NOT NULL,
	user_id INT REFERENCES "user" NOT NULL
	);
	
CREATE TABLE "med_list" (
	id SERIAL PRIMARY KEY,
	diagnosis VARCHAR (255) NOT NULL,
	user_id INT REFERENCES "user" NOT NULL
	);
	
CREATE TABLE "symptoms" (
	id SERIAL PRIMARY KEY,
	symptom VARCHAR (255) NOT NULL UNIQUE
	);
	
CREATE TABLE "user_symptom" (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user" NOT NULL,
	symptom_id INT REFERENCES "symptoms" NOT NULL,
	inserted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	intensity INT
	);
	