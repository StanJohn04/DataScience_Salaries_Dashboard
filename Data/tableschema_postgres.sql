-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/ZDXqsA
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "data_science" (
    "work_year" int   NOT NULL,
    "experience_level" varchar(5)   NOT NULL,
    "employment_type" varchar(5)   NOT NULL,
    "job_title" varchar(50)   NOT NULL,
    "salary" int   NOT NULL,
    "salary_currency" varchar(3)   NOT NULL,
    "salary_in_usd" int   NOT NULL,
    "employee_residence" varchar(2)   NOT NULL,
    "remote_ratio" int   NOT NULL,
    "company_location" varchar(2)   NOT NULL,
    "company_size" varchar(1)   NOT NULL
);

