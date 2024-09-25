-- SQLBook: Code

CREATE TABLE difficulty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO difficulty (name) VALUES ('Facile'), ('Intermédiaire'), ('Difficile');

CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   pseudo VARCHAR(50) NOT NULL,
   username VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL DEFAULT 0,
   civility INT NOT NULL DEFAULT 0 CHECK (civility IN (0, 1, 2)),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO user (pseudo, username, password, email, role)
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
    instruction text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (difficulty_id) REFERENCES Difficulty(id)
);

INSERT INTO recipe (user_id, difficulty_id, title, description, cooking_time, preparation_time, instruction) VALUES (2, 3, "Saint-honoré", "Le Saint-Honoré est un dessert classique de la pâtisserie française, composé d'une base de pâte feuilletée, surmontée de choux garnis de crème chiboust et caramélisés, le tout décoré de chantilly", 60, 120, 'lorem'), (3, 1, "Quiche Thon et tomates","Une quiche savoureuse et facile à réaliser, à base de thon et de tomates fraîches, parfaite pour un repas léger ou un pique-nique.", 60, 20, 'lorem'), (2, 2, "Lasagnes bolognaise","Des lasagnes à la bolognaise classiques, avec une sauce riche en viande hachée, sauce tomate et une béchamel crémeuse. Un plat italien incontournable et généreux." , 60, 60, 'lorem'),(2, 1, "Toast foie gras", "Le foie gras est un mets délicat français, préparé à partir du foie d'oie ou de canard engraissé. Il est apprécié pour sa texture fondante et son goût riche et subtil.", 2, 5, 'lorem');


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
('Thon'),
('Yuzu');


 CREATE TABLE Recipe_Ingredient (
    recipe_id INT NOT NULL,
    quantity DECIMAL(10,2),
    unit VARCHAR(20),
    ingredient_id INT NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
); 
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (2, 1, 'boite de', 106 ), (2, 2, "", 66 );

