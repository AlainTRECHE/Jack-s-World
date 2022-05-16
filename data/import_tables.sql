

CREATE TABLE "character" (

    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "description" text NOT NULL,
    "picture" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
    );

 CREATE TABLE "user" (

   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "username" text NOT NULL,
   "password" text NOT NULL,
   "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" timestamptz
    );