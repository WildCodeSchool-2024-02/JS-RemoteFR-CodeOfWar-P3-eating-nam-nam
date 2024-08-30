CREATE TABLE difficulty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO difficulty (name) VALUES ('Facile'), ('Intermédiaire'), ('Difficile');

 CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
   name VARCHAR(100) NOT NULL,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (username, name, password, email, role)
VALUES ('Ewan', 'Senergous', 'password', 'ewan@outlook.fr', 'admin')
,('Anais', 'Dufourneau', 'password', 'anais@outlook.fr', 'user');


 CREATE TABLE recipe (
     id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
  difficulty_id INT NOT NULL,
   title VARCHAR(100) NOT NULL,
     description text NOT NULL,
    cooking_time INT NOT NULL,
    preparation_time INT NOT NULL,
    instruction text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
   FOREIGN KEY (difficulty_id) REFERENCES Difficulty(id)
);

INSERT INTO recipe (user_id, difficulty_id, title, description, cooking_time, preparation_time, instruction) VALUES (2, 3, "Saint-honoré", 'lorem', 60, 120, 'lorem' );

-- CREATE TABLE Image (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     image VARCHAR(255) NOT NULL,
--     recipe_id INT NOT NULL,
--     FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE
-- );

-- CREATE TABLE Ingredient (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL UNIQUE
-- );

-- CREATE TABLE Recipe_Ingredient (
--     recipe_id INT NOT NULL,
--     ingredient_id INT NOT NULL,
--     quantity DECIMAL(10,2),
--     unit VARCHAR(20),
--     PRIMARY KEY (recipe_id, ingredient_id),
--     FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
--     FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
-- );

-- CREATE TABLE Favorites (
--     user_id INT NOT NULL,
--     recipe_id INT NOT NULL,
--     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (user_id, recipe_id),
--     FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
--     FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE
-- );