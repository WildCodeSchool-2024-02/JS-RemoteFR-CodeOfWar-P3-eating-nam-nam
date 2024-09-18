-- SQLBook: Code
CREATE TABLE difficulty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO difficulty (name) VALUES ('Facile'), ('Intermédiaire'), ('Difficile');

CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   fullname VARCHAR(50) NOT NULL,
   username VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL DEFAULT 0,
   civility INT NOT NULL DEFAULT 0 CHECK (civility IN (0, 1, 2)),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO user (username, fullname, password, email, role)
VALUES ('GastroGeek', 'Ewan', 'password', 'ewan@outlook.fr', 'admin')
,('Chef_Gourmand', 'Kevin', 'password','kevin@outlook.fr', 'user'),
('PatissierePoetique','Anais', 'password', 'anais@outlook.fr','user');

CREATE TABLE recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    difficulty_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description text NOT NULL,
    cooking_time INT NOT NULL,
    preparation_time INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (difficulty_id) REFERENCES Difficulty(id)
);

CREATE TABLE recipe_step (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE
);

CREATE TABLE ingredient (
  id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100) NOT NULL UNIQUE
 );

INSERT INTO ingredient (name) VALUES 
('Ail'),
('Artichaut'),
('Asperge'),
('Aubergine'),
('Basilic'),
('Betterave'),
('Betterave chioggia'),
('Blette'),
('Brocoli'),
('Carotte'),
('Carotte violette'),
('Céleri'),
('Champignon de Paris'),
('Champignon portobello'),
('Champignon shiitake'),
('Chayotte'),
('Chicorée'),
('Chou chinois'),
('Chou de Bruxelles'),
('Chou-fleur'),
('Chou-rave'),
('Chou rouge'),
('Chou vert'),
('Ciboulette'),
('Coriandre'),
('Cresson'),
('Crosne'),
('Courge butternut'),
('Courge spaghetti'),
('Courgette'),
('Daikon'),
('Endive'),
('Épinard'),
('Fève'),
('Fenouil'),
('Haricot vert'),
('Kale'),
('Laitue'),
('Laurier'),
('Mâche'),
('Navet'),
('Oignon'),
('Pak-choï'),
('Patate douce'),
('Patisson'),
('Petit pois'),
('Pois chiche'),
('Pois mange-tout'),
('Poire de terre'),
('Poireau'),
('Poivron jaune'),
('Poivron rouge'),
('Poivron vert'),
('Potiron'),
('Radicchio'),
('Radis'),
('Radis noir'),
('Romaine'),
('Roquette'),
('Rutabaga'),
('Salsifis'),
('Salicorne'),
('Scarole'),
('Thym'),
('Topinambour'),
('Tomate'),
('Abricot'),
('Ananas'),
('Avocat'),
('Banane'),
('Cerise'),
('Citron'),
('Clémentine'),
('Coco'),
('Datte'),
('Figue'),
('Fraise'),
('Framboise'),
('Fruit de la passion'),
('Grenade'),
('Groseille'),
('Kiwi'),
('Kumquat'),
('Litchi'),
('Mandarine'),
('Mangue'),
('Melon'),
('Mirabelle'),
('Mûre'),
('Myrtille'),
('Nectarine'),
('Noisette'),
('Noix'),
('Orange'),
('Pamplemousse'),
('Papaye'),
('Pastèque'),
('Pêche'),
('Poire'),
('Pomme'),
('Prune'),
('Quetsche'),
('Raisin'),
('Raisin sec'),
('Rhubarbe'),
('Yuzu');


 CREATE TABLE Recipe_Ingredient (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity DECIMAL(10,2),
    unit VARCHAR(20),
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
); 