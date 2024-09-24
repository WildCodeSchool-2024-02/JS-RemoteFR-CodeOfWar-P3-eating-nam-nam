
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
VALUES ('GastroGeek', 'Ewan', 'password', 'ewan@outlook.fr', 'admin'),
('Chef_Gourmand', 'Kevin', 'password','kevin@outlook.fr', 'user'),
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
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
    UNIQUE KEY unique_recipe_step (recipe_id, step_number)
);

INSERT INTO recipe (user_id, difficulty_id, title, description, cooking_time, preparation_time) VALUES (3, 1, "Quiche Thon et tomates","Une quiche savoureuse et facile à réaliser, à base de thon et de tomates fraîches, parfaite pour un repas léger ou un pique-nique.", 60, 20), (2, 2, "Lasagnes bolognaise","Des lasagnes à la bolognaise classiques, avec une sauce riche en viande hachée, sauce tomate et une béchamel crémeuse. Un plat italien incontournable et généreux." , 60, 60), (2, 1, "Toast foie gras", "Le foie gras est un mets délicat français, préparé à partir du foie d'oie ou de canard engraissé. Il est apprécié pour sa texture fondante et son goût riche et subtil.", 2, 5), (2, 2, "Tarte Tatin", "La Tarte Tatin est une célèbre tarte aux pommes caramélisées à l'envers, cuite au four. Elle est croquante et fondante à la fois.", 45, 30), (3, 1, "Salade César", "La salade César est une salade classique composée de laitue romaine, de croûtons, de parmesan et d'une sauce à base de mayonnaise et d'anchois.", 0, 15), (2, 2, "Bœuf Bourguignon", "Un plat traditionnel français à base de bœuf mijoté dans une sauce au vin rouge, agrémenté de légumes comme les carottes, champignons et oignons.", 180, 45), (2, 3, "Soufflé au fromage", "Un soufflé au fromage est un plat aérien à base de fromage râpé et d'œufs battus en neige. Il gonfle à la cuisson pour un résultat léger et moelleux.", 25, 20), (3, 2, "Poulet au curry", "Un plat épicé à base de morceaux de poulet mijotés dans une sauce au curry crémeuse. Parfait pour un repas savoureux et rapide.", 40, 15), (3, 1, "Omelette aux champignons", "Une omelette simple et savoureuse aux champignons sautés. Idéale pour un repas léger et rapide.", 5, 10),(2, 2, "Pâtes carbonara", "Un classique italien, les pâtes carbonara sont préparées avec des œufs, du parmesan, du lard et beaucoup de poivre.", 20, 10), (3, 3, "Canard à l'orange", "Un plat sophistiqué où le canard est cuit avec une sauce à base d'orange pour un goût sucré-salé exquis.", 60, 30), (1, 1, "Crêpes", "Les crêpes françaises sont fines et délicates, parfaites pour être servies avec du sucre, de la confiture ou du chocolat.", 10, 5), (3, 2, "Ratatouille", "Un ragoût de légumes du sud de la France, composé principalement d'aubergines, de courgettes, de poivrons et de tomates.", 60, 30), (2, 1, "Tarte au citron meringuée", "Un dessert classique, une tarte au citron acidulée recouverte d'une meringue légère et dorée.", 30, 20), (2, 2, "Curry de légumes", "Un plat végétarien épicé et parfumé à base de légumes variés et de lait de coco.", 45, 20), (3, 1, "Pancakes", "Des pancakes moelleux parfaits pour un petit-déjeuner gourmand.", 10, 15), (3, 2, "Gratin dauphinois", "Un gratin à base de pommes de terre, de crème et de fromage, fondant à souhait.", 60, 15), (2, 1, "Salade niçoise", "Une salade composée fraîche avec du thon, des olives, des œufs, et des légumes méditerranéens.", 0, 20), (3, 3, "Baba au rhum", "Un dessert gourmand imbibé de rhum et garni de crème fouettée.", 40, 60), (2, 1, "Spaghetti aglio e olio", "Un plat simple et rapide de pâtes avec de l'ail, de l'huile d'olive et du piment.", 10, 5), (2, 2, "Coq au vin", "Un classique de la cuisine française où le poulet est mijoté dans du vin rouge avec des légumes.", 150, 30), (3, 2, "Crème brûlée", "Un dessert crémeux avec une fine croûte caramélisée au sucre.", 60, 15);

CREATE TABLE ingredient (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO ingredient (name) VALUES 
('ail'),
('artichaut'),
('asperge'),
('aubergine'),
('basilic'),
('betterave'),
('betterave chioggia'),
('blette'),
('brocoli'),
('carotte'),
('carotte violette'),
('céleri'),
('champignon de Paris'),
('champignon portobello'),
('champignon shiitake'),
('chayotte'),
('chicorée'),
('chou chinois'),
('chou de Bruxelles'),
('chou-fleur'),
('chou-rave'),
('chou rouge'),
('chou vert'),
('ciboulette'),
('coriandre'),
('cresson'),
('crosne'),
('courge butternut'),
('courge spaghetti'),
('courgette'),
('daikon'),
('endive'),
('epinard'),
('fève'),
('fenouil'),
('haricot vert'),
('kale'),
('laitue'),
('laurier'),
('mâche'),
('navet'),
('oignon'),
('pak-choï'),
('patate douce'),
('patisson'),
('petit pois'),
('pois chiche'),
('pois mange-tout'),
('poire de terre'),
('poireau'),
('poivron jaune'),
('poivron rouge'),
('poivron vert'),
('potiron'),
('radicchio'),
('radis'),
('radis noir'),
('romaine'),
('roquette'),
('rutabaga'),
('salsifis'),
('salicorne'),
('scarole'),
('thym'),
('topinambour'),
('tomates'),
('abricot'),
('ananas'),
('avocat'),
('banane'),
('cerise'),
('citron'),
('clémentine'),
('coco'),
('datte'),
('figue'),
('fraise'),
('framboise'),
('fruit de la passion'),
('grenade'),
('groseille'),
('kiwi'),
('kumquat'),
('litchi'),
('mandarine'),
('mangue'),
('melon'),
('mirabelle'),
('mûre'),
('myrtille'),
('nectarine'),
('noisette'),
('noix'),
('orange'),
('pamplemousse'),
('papaye'),
('pastèque'),
('pêche'),
('poire'),
('pomme'),
('prune'),
('quetsche'),
('raisin'),
('raisin sec'),
('rhubarbe'),
('thon'),
('yuzu'),
('beurre'),
('sucre'),
('farine'),
('Œufs'),
('lait'),
('gélatine'),
('crème liquide entière'),
('sucre glace'),
('extrait de vanille'),
('pâte brisée'),
('crème fraîche'),
('gruyère'),
('moutarde'),
('boeuf hachée'),
('tomates concassées'),
('concentré de tomates'),
('vin rouge'),
('huile d olive'),
('feuilles de lasagnes'),
('parmesan'),
('muscade'),
('pain de campagne'),
('confiture de figues'),
('fleur de sel'),
('poivre'),
('sel'),
('pâte feuilletée'),
('eau'),
('origan'),
('foie gras'),
('beurre fondu'),
('fond de volaille'),
('canard'),
('orange zeste et jus'),
('citron zeste et jus'),
('vinaigre de vin blanc'),
('Grand Marnier'),
('lardons'),
('parmesan râpé'),
('lait de coco'),
('poulet'),
('curry en poudre'),
('huile végétale'),
('gingembre frais'),
('croûtons'),
('anchois'),
('maizena'),
("blancs d'oeuf");



CREATE TABLE Recipe_Ingredient (
    recipe_id INT NOT NULL,
    quantity DECIMAL(10,2),
    unit VARCHAR(20),
    ingredient_id INT NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
); 

-- Quiche thon tomates
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (1, 1, '', 117), (1, 1, 'cas de', 120), (1, 1, 'boite de', 106 ), (1, 2, "", 66 ), (1, 200, 'ml de', 118 ), (1, 100, 'g', 119), (1, 3, '', 111), (1, 1, 'pincée de', 133), (1, 1, 'pincée de', 132);

-- Lasagnes bolognaise
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
 VALUES (2, 300, 'g', 121), (2, 1, '', 42), (2, 2, "gousses d'", 1), (2, 400, 'g de', 122), (2, 1, 'cas de', 123), (2, 1, '', 10), (2, 1, 'branche de', 12), (2, 100, 'ml de', 124), (2, 1, 'cas d', 125), (2, 1, 'cas d', 64), (2, 1, 'cas d', 136), (2, 50, 'g de', 108), (2, 50, 'g de', 110), (2, 500, 'ml de', 112), (2, 1, 'pincée de', 133), (2, 1, 'pincée de', 132), (2, 1, 'pincée de', 128), (2, 100, 'g de', 119), (2, 9, '', 126);

-- Toast Foie Gras
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
 VALUES (3, 200, "g de", 137), (3, 1, "cas de", 130), (3, 1, "cas de", 131), (3, 1, "cac de", 132), (3, 4, "tranches de", 129);


-- Tarte Tatin
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (4, 5, '', 100), (4, 100, 'g de', 109), (4, 1, 'pincée de', 131), (4, 100, 'g de', 108), (4, 1, 'pâte feuilletée', 134);


-- Salade César
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (5, 1, 'grande', 38), (5, 50, 'g de', 146), (5, 50, 'g de', 152), (5, 50, 'ml de', 118), (5, 2, "filets d'", 153), (5, 1, 'pincée de', 133), (5, 1, 'pincée de', 132);

-- Boeuf Bourguignon
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (6, 500, 'g de', 121), (6, 2, '', 42), (6, 2, 'gousses d', 1), (6, 200, 'ml de', 124), (6, 100, 'g de', 108), (6, 2, '', 10), (6, 1, 'branche de', 12), (6, 200, 'g de', 13), (6, 1, 'pincée de', 132), (6, 1, 'pincée de', 133);


-- Soufflé au fromage
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (7, 3, '', 111), (7, 100, 'g de', 119), (7, 50, 'g de', 110), (7, 200, 'ml de', 112), (7, 1, 'pincée de', 132), (7, 1, 'pincée de', 133);


-- Poulet au curry
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (8, 400, 'g de', 148), (8, 1, '', 42), (8, 2, 'gousses d', 1), (8, 1, 'cac de', 149), (8, 200, 'ml de', 147), (8, 1, 'pincée de', 132), (8, 1, 'pincée de', 133);


-- Omelette aux champignons
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (9, 3, '', 111), (9, 200, 'g de', 13), (9, 1, 'pincée de', 133), (9, 1, 'pincée de', 132), (9, 50, 'g de', 119);


-- Pâtes carbonara
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (10, 200, 'g de', 126), (10, 100, 'g de', 145), (10, 50, 'g de', 127), (10, 3, '', 111), (10, 1, 'pincée de', 132), (10, 1, 'pincée de', 133);


-- Canard à l'orange
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (11, 1, 'canard', 140), (11, 3, '', 94), (11, 1, 'pincée de', 132), (11, 1, 'pincée de', 133), (11, 1, 'cac de', 141), (11, 1, 'cas de', 144);


-- Crêpes
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (12, 3, '', 111), (12, 100, 'g de', 110), (12, 200, 'ml de', 112), (12, 1, 'pincée de', 133), (12, 1, 'pincée de', 132);


-- Ratatouille
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id ) 
VALUES (13, 2, '', 4), (13, 2, '', 30), (13, 2, '', 10), (13, 2, '', 66), (13, 1, '', 42), (13, 2, 'gousses d', 1), (13, 1, 'pincée de', 133), (13, 1, 'pincée de', 132);

-- Tarte citron Meringuée
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id) 
VALUES (14, 1, 'cas de', 154), (14, 3, '', 111), (14, 200, 'g de', 100), 
(14, 3, 'zeste de', 142), (14, 1, 'pincée de', 133), (14, 1, 'pâte', 117), (14, 2, "", 155), (14, 100, 'g de', 115);

-- Curry de légumes
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id) 
VALUES (15, 1, '', 4), (15, 1, '', 30), (15, 1, '', 44), (15, 1, 'cas de', 149), (15, 200, 'ml de', 147), (15, 1, 'pincée de', 132), (15, 1, 'pincée de', 133);
=======
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
VALUES ('GastroGeek', 'Ewan', 'password', 'ewan@outlook.fr', 'admin'),
('Chef_Gourmand', 'Kevin', 'password','kevin@outlook.fr', 'user'),
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
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
    UNIQUE KEY unique_recipe_step (recipe_id, step_number)
);

INSERT INTO recipe (user_id, difficulty_id, title, description, cooking_time, preparation_time) 
VALUES 
(2, 3, "Saint-honoré", "Le Saint-Honoré est un dessert classique de la pâtisserie française, composé d'une base de pâte feuilletée, surmontée de choux garnis de crème chiboust et caramélisés, le tout décoré de chantilly", 60, 120),
(3, 1, "Quiche Thon et tomates","Une quiche savoureuse et facile à réaliser, à base de thon et de tomates fraîches, parfaite pour un repas léger ou un pique-nique.", 60, 20),
(2, 2, "Lasagnes bolognaise","Des lasagnes à la bolognaise classiques, avec une sauce riche en viande hachée, sauce tomate et une béchamel crémeuse. Un plat italien incontournable et généreux." , 60, 60),
(2, 1, "Toast foie gras", "Le foie gras est un mets délicat français, préparé à partir du foie d'oie ou de canard engraissé. Il est apprécié pour sa texture fondante et son goût riche et subtil.", 2, 5);

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