-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  name VARCHAR(255) NOT NULL,
  deadline DATE NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);
