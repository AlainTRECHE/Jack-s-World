

CREATE TABLE "character" (

    "id " integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "description" text NOT NULL,
    "picture" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
    );