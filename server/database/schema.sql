-- SQLBook: Code
CREATE TABLE difficulty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);
INSERT INTO difficulty (name) VALUES ('Facile'), ('Intermédiaire'), ('Difficile');
CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   fullname VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL DEFAULT 0,
   civility INT NOT NULL DEFAULT 0 CHECK (civility IN (0, 1, 2)),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO user (username, fullname, password, email, role)
VALUES ('GastroGeek', 'Ewan', '$argon2id$v=19$m=19456,t=2,p=1$63KffLv3FneEo8gNVl9Sow$I16Fx9yu1qKmpMQZ2exTgyvY5+RMJy23eTsNutAqrek', 'ewan@outlook.fr', 'admin'),
('Chef_Gourmand', 'Kevin', '$argon2id$v=19$m=19456,t=2,p=1$63KffLv3FneEo8gNVl9Sow$I16Fx9yu1qKmpMQZ2exTgyvY5+RMJy23eTsNutAqrek','kevin@outlook.fr', 'user'),
('PatissierePoetique','Anais', '$argon2id$v=19$m=19456,t=2,p=1$63KffLv3FneEo8gNVl9Sow$I16Fx9yu1qKmpMQZ2exTgyvY5+RMJy23eTsNutAqrek', 'anais@outlook.fr','user');
CREATE TABLE category (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
);
INSERT INTO category (name) VALUES ('Entrées'), ('Plats'), ('Desserts');

CREATE TABLE recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL DEFAULT "omelette.jpg",
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    difficulty_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description text NOT NULL,
    cooking_time INT NOT NULL,
    preparation_time INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (difficulty_id) REFERENCES Difficulty(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE favorite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
    UNIQUE KEY user_recipe (user_id, recipe_id)
);

INSERT INTO recipe (image_url, user_id, category_id, difficulty_id, title, description, cooking_time, preparation_time) VALUES ("quiche-thon-tomates.jpg", 1, 2, 1, "Quiche Thon et tomates","Une quiche savoureuse et facile à réaliser, à base de thon et de tomates fraîches, parfaite pour un repas léger ou un pique-nique.", 60, 20), ("lasagne-bolognaise.jpg",2, 2, 2, "Lasagnes bolognaise","Des lasagnes à la bolognaise classiques, avec une sauce riche en viande hachée, sauce tomate et une béchamel crémeuse. Un plat italien incontournable et généreux." , 60, 60), ("foie-gras.jpg", 2, 1, 1, "Toast foie gras", "Le foie gras est un mets délicat français, préparé à partir du foie d'oie ou de canard engraissé. Il est apprécié pour sa texture fondante et son goût riche et subtil.", 2, 5), ("tarte-tatin.jpg", 2, 3, 2, "Tarte Tatin", "La Tarte Tatin est une célèbre tarte aux pommes caramélisées à l'envers, cuite au four. Elle est croquante et fondante à la fois.", 45, 30), ("salade-cesar.jpg", 3, 1, 1, "Salade César", "La salade César est une salade classique composée de laitue romaine, de croûtons, de parmesan et d'une sauce à base de mayonnaise et d'anchois.", 0, 15), ("Boeuf-bourguignon.jpg", 2, 2, 2, "Bœuf Bourguignon", "Un plat traditionnel français à base de bœuf mijoté dans une sauce au vin rouge, agrémenté de légumes comme les carottes, champignons et oignons.", 180, 45), ("souffle-fromage.jpg", 2, 1, 3, "Soufflé au fromage", "Un soufflé au fromage est un plat aérien à base de fromage râpé et d'œufs battus en neige. Il gonfle à la cuisson pour un résultat léger et moelleux.", 25, 20), ("poulet-curry.jpg", 3, 2, 2, "Poulet au curry", "Un plat épicé à base de morceaux de poulet mijotés dans une sauce au curry crémeuse. Parfait pour un repas savoureux et rapide.", 40, 15), ("omelette.jpg", 3, 2, 1, "Omelette champignons", "Une omelette simple et savoureuse aux champignons sautés. Idéale pour un repas léger et rapide.", 5, 10),("pates-carbonara.jpg", 2, 2, 2, "Pâtes carbonara", "Un classique italien, les pâtes carbonara sont préparées avec des œufs, du parmesan, du lard et beaucoup de poivre.", 20, 10), ("canard-orange.jpg", 3, 2, 3, "Canard à l'orange", "Un plat sophistiqué où le canard est cuit avec une sauce à base d'orange pour un goût sucré-salé exquis.", 60, 30), ("crepes.jpg", 1, 3, 1, "Crêpes", "Les crêpes françaises sont fines et délicates, parfaites pour être servies avec du sucre, de la confiture ou du chocolat.", 10, 5), ("ratatouille.jpg", 3, 2, 2, "Ratatouille", "Un ragoût de légumes du sud de la France, composé principalement d'aubergines, de courgettes, de poivrons et de tomates.", 60, 30), ("tarte-au-citron-meringuée.jpg", 2, 3, 1, "Tarte au citron meringuée", "Un dessert classique, une tarte au citron acidulée recouverte d'une meringue légère et dorée.", 30, 20), ("curry-de-legumes.jpg", 2, 2, 2, "Curry de légumes", "Un plat végétarien épicé et parfumé à base de légumes variés et de lait de coco.", 45, 20), ("pancakes.jpg", 3, 3, 1, "Pancakes", "Des pancakes moelleux parfaits pour un petit-déjeuner gourmand.", 10, 15), ("gratin-dauphinois.jpg", 3, 2, 2, "Gratin dauphinois", "Un gratin à base de pommes de terre, de crème et de fromage, fondant à souhait.", 60, 15), ("salade-nicoise.jpg", 2, 1, 1, "Salade niçoise", "Une salade composée fraîche avec du thon, des olives, des œufs, et des légumes méditerranéens.", 0, 20), ("baba-au-rhum.jpg", 3, 3, 3, "Baba au rhum", "Un dessert gourmand imbibé de rhum et garni de crème fouettée.", 40, 60), ("spaghetti-aglio-e-olio.jpg", 2, 2, 1, "Spaghetti aglio e olio", "Un plat simple et rapide de pâtes avec de l'ail, de l'huile d'olive et du piment.", 10, 5), ("coq-au-vin.png", 2, 2, 2, "Coq au vin", "Un classique de la cuisine française où le poulet est mijoté dans du vin rouge avec des légumes.", 150, 30), ("crème-brûlée.jpg", 3, 3, 2, "Crème brûlée", "Un dessert crémeux avec une fine croûte caramélisée au sucre.", 60, 15), ("tomate-garnie.png", 2, 1, 1, "Tomate garnie", "La tomate garnie est une entrée fraîche et savoureuse. Une tomate creusée est remplie d'un mélange d'oignons, de maïs croquant et de pousses germées. Cette préparation légère et colorée est parfaite pour débuter un repas d'été ou un dîner léger.", 0, 10), ("verrine-saumon-avocat-skyr.jpg", 3, 1, 1, "Verrine saumon avocat", "La verrine de saumon, avocat, skyr et œufs de lump est une entrée raffinée et colorée. Elle combine des couches de saumon frais ou fumé, de l'avocat écrasé, du skyr onctueux et des œufs de lump délicats. Ce mariage de saveurs et de textures en fait un choix parfait pour vos repas festifs ou dîners élégants.", 0, 20);

CREATE TABLE recipe_step (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
    UNIQUE KEY unique_recipe_step (recipe_id, step_number)
);

-- Step recipe quiche
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(1, 1, "Préchauffer le four à 180°C."), (1, 2, "Étaler la pâte dans un moule."), (1, 3, "Mélanger les œufs, la crème, le thon émietté et les tomates coupées en morceaux."), (1, 4, "Assaisonner avec du sel, du poivre et des herbes de Provence."), (1, 5, "Verser le mélange sur la pâte."), (1, 6, "Cuire au four pendant environ 40-45 minutes.");

-- Step recipe lasagnes
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(2, 1, "Faire revenir la viande hachée avec des oignons, de l'ail et des carottes."), (2, 2, "Ajouter la sauce tomate et laisser mijoter."), (2, 3, "Préparer une béchamel: beurre, farine, lait, sel, poivre, muscade"), (2, 4, "Alterner les couches de lasagnes, de sauce bolognaise et de béchamel dans un plat."), (2, 5, "Terminer avec une couche de béchamel et du fromage râpé."), (2, 6, "Cuire au four à 180°C pendant environ 45-60 minutes.");

-- Step recipe foie gras
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(3, 1, "Couper des tranches de pain et les griller légèrement."), (3, 2, "Ajouter des tranches de foie gras sur chaque toast."), (3, 3, "Servir avec une pincée de fleur de sel et du poivre.");

-- Step recipe Tarte tatin
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(4, 1, "Préchauffer le four à 180°C."), (4, 2, "Caraméliser du sucre avec du beurre dans une poêle."), (4, 3, "Ajouter des pommes coupées en quartiers dans le caramel."), (4, 4, "Recouvrir avec une pâte feuilletée et enfourner pour 30-40 minutes."), (4, 5, "Retourner la tarte pour la servir.");

-- Step recipe Salade caesar 
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(5, 1, "Préparer des croûtons de pain grillé."), (5, 2, "Mélanger de la laitue romaine avec du parmesan râpé."), (5, 3, "Ajouter les croûtons."),
(5, 4, "Préparer une sauce à base de mayonnaise, ail, anchois, et citron."), (5, 5, "Mélanger le tout et servir.");

-- Step recipe Boeuf bourguignon
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(6, 1, "Faire revenir les morceaux de bœuf dans une cocotte."), (6, 2, "Ajouter des carottes, des oignons, de l'ail et des champignons."), (6, 3, "Ajouter du vin rouge et laisser mijoter à feu doux pendant environ 3 heures."), (6, 4, "Servir avec des pommes de terre ou des pâtes.");

-- Step recipe soufflé fromage 
 INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(7, 1, "Préchauffer le four à 180°C."), (7, 2, "Préparer une béchamel, y ajouter du fromage râpé."), (7, 3, "Incorporer des jaunes d'œufs, puis les blancs montés en neige."), (7, 4, "Verser dans des ramequins beurrés et enfourner pendant 20-25 minutes.");

-- Step recipe Poulet curry
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(8, 1, "Faire revenir des morceaux de poulet dans une poêle avec de l'huile."), (8, 2, "Ajouter des oignons et de l'ail haché, puis faire revenir."),(8, 3, "Incorporer une pâte de curry et mélanger."),
(8, 4, "Ajouter du lait de coco et laisser mijoter pendant 20-30 minutes."), (8, 5, "Servir avec du riz.");

-- Step recipe omelette
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(9, 1, "Faire revenir les champignons dans une poêle avec du beurre."), (9, 2, "Battre les œufs dans un bol, saler et poivrer."), (9, 3, "Ajouter les champignons aux œufs battus."), (9, 4, "Verser le mélange dans une poêle chaude et cuire jusqu'à consistance désirée."), (9, 5, "Servir chaud.");

-- Step recipe pate carbo
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(10, 1, "Cuire les pâtes dans une grande casserole d'eau salée."), (10, 2, "Faire revenir des lardons dans une poêle."), (10, 3, "Battre les œufs avec du parmesan râpé dans un bol."), (10, 4, "Égoutter les pâtes et les ajouter aux lardons."), (10, 5, "Retirer du feu et incorporer le mélange œufs-parmesan."), (10, 6, "Mélanger et servir immédiatement avec du poivre noir.");

-- Step recipe Canard a l'orange
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(11, 1, "Préchauffer le four à 180°C."), (11, 2, "Faire cuire les cuisses de canard dans une poêle pour les dorer."), (11, 3, "Préparer une sauce à l'orange avec du jus d'orange, du miel, et un peu de vinaigre."), (11, 4, "Enfourner les cuisses de canard et arroser régulièrement de la sauce à l'orange."), (11, 5, "Cuire pendant environ 45-60 minutes.");

-- Step recipe Crepes
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(12, 1, "Dans un bol, mélanger la farine, les œufs, le lait et une pincée de sel."), (12, 2, "Fouetter jusqu'à obtenir une pâte lisse."), (12, 3, "Laisser reposer la pâte pendant 30 minutes."), (12, 4, "Faire chauffer une poêle avec un peu de beurre, puis verser une louche de pâte."), (12, 5, "Cuire chaque crêpe 1 à 2 minutes de chaque côté.");

-- Step recipe Ratatouille 
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(13, 1, "Couper en dés les légumes : aubergines, courgettes, poivrons et tomates."), (13, 2, "Faire revenir chaque légume séparément dans de l'huile d'olive."), (13, 3, "Mélanger les légumes dans une cocotte, ajouter de l'ail et des herbes de Provence."), (13, 4, "Laisser mijoter à feu doux pendant environ 45 minutes.");

-- Step recipe tarte au citron
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(14, 1, "Préparer une pâte sablée et la cuire à blanc."), (14, 2, "Préparer une crème au citron avec des jaunes d'œufs, du sucre, du jus de citron et du beurre."), (14, 3, "Garnir la pâte cuite avec la crème au citron."), (14, 4, "Monter les blancs d'œufs en neige avec du sucre pour faire la meringue."), (14, 5, "Recouvrir la tarte avec la meringue et enfourner à 180°C pour la dorer.");

-- Step recipe Curry de légumes
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(15, 1, "Faire revenir des oignons, de l'ail et du gingembre dans une poêle."), (15, 2, "Ajouter des légumes coupés en morceaux (carottes, courgettes, pommes de terre, etc.)."), (15, 3, "Incorporer une pâte de curry et mélanger."), (15, 4, "Ajouter du lait de coco et laisser mijoter pendant environ 30-40 minutes."), (15, 5, "Servir avec du riz.");

-- Step recipe Pancakes
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(16, 1, "Dans un bol, mélanger la farine, le sucre, la levure et une pincée de sel."), (16, 2, "Ajouter le lait et les œufs, puis mélanger jusqu'à obtenir une pâte homogène."), (16, 3, "Faire chauffer une poêle avec un peu de beurre."), (16, 4, "Verser une petite louche de pâte dans la poêle et cuire 1 à 2 minutes de chaque côté."), (16, 5, "Servir avec du sirop d'érable, du beurre ou des fruits.");

-- Step recipe Gratin dauphinois
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(17, 1, "Préchauffer le four à 180°C."), (17, 2, "Éplucher et couper les pommes de terre en rondelles."), (17, 3, "Frotter un plat à gratin avec une gousse d'ail."), (17, 4, "Disposer les pommes de terre en couches dans le plat."), (17, 5, "Verser de la crème et du lait par-dessus, saler, poivrer et ajouter de la muscade."), (17, 6, "Parsemer de fromage râpé et enfourner pendant 1 heure.");

-- Step recipe salade niçoise 
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(18, 1, "Laver et couper des tomates, des poivrons, et des concombres."), (18, 2, "Cuire des œufs durs et les couper en quartiers."), (18, 3, "Ajouter des olives noires et des filets de thon."), (18, 4, "Préparer une vinaigrette avec de l'huile d'olive, du vinaigre, du sel, et du poivre."), (18, 5, "Mélanger le tout et servir frais.");

-- Step recipe baba au rhum
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(19, 1, "Préchauffer le four à 180°C."), (19, 2, "Préparer une pâte avec de la farine, des œufs, de la levure, du lait et du sucre."), (19, 3, "Verser la pâte dans des moules à baba et cuire au four pendant 25 minutes."),(19, 4, "Préparer un sirop au rhum avec de l'eau, du sucre, et du rhum."), (19, 5, "Imbiber les babas avec le sirop au rhum."), (19, 6, "Servir avec de la crème fouettée.");

-- Step recipe Spaghetti aglio e olio
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(20, 1, "Cuire les spaghetti dans une grande casserole d'eau salée."), (20, 2, "Faire revenir de l'ail émincé dans une poêle avec de l'huile d'olive."), (20, 3, "Ajouter du piment en flocons selon le goût."), (20, 4, "Égoutter les spaghetti et les mélanger avec l'ail et l'huile."), (20, 5, "Servir immédiatement avec du persil frais.");

-- Step recipe coq au vin 
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(21, 1, "Faire revenir des morceaux de coq dans une cocotte avec de l'huile."), (21, 2, "Ajouter des oignons, des carottes, des lardons, et des champignons."), (21, 3, "Déglacer avec du vin rouge et ajouter du bouillon."), (21, 4, "Couvrir et laisser mijoter pendant 2 à 3 heures."), (21, 5, "Servir avec des pommes de terre ou du pain.");

-- Step recipe creme brulee
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(22, 1, "Préchauffer le four à 150°C."), (22, 2, "Mélanger des jaunes d'œufs avec du sucre et de la crème liquide."), (22, 3, "Verser la préparation dans des ramequins."), (22, 4, "Cuire au bain-marie pendant 45 minutes."), (22, 5, "Laisser refroidir, puis saupoudrer de sucre et caraméliser avec un chalumeau.");

-- Step recipe Tomate garnie 
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(23, 1, "Couper le chapeau de la tomate et creuser le fond"), (23, 2, "Mélanger le thon avec les oignons ciselés, le mais et la ciboulette"), (23, 3, "Ajouter les pousses germées"), (23, 4, "mettre la vinaigrette er replacer le chapeau par dessus");

-- Step recipe Verinne
INSERT INTO recipe_step (recipe_id, step_number, description) VALUES 
(24, 1, "Mixer l'avocat"), (24, 2, "Ajouter le jus de citron et le skyr, mélanger"), (24, 3, "Répartir dans les verinnes"), (24, 4, "Ajouter des morceaux de saumon fumé."), (24, 5, "Garnir d'œufs de lump et servir frais.");




CREATE TABLE ingredient (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
  );

INSERT INTO ingredient (name)
 VALUES 
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
("blancs d'oeuf"),
('rhum'),
('olives'),
('oignons rouges'),
('pousses germées'),
('vinaigrette'),
('skyr'),
('saumon fumée'),
('oeuf de lump'),
('sauce teriyaki'),
('maïs'),
('jus de citron vert');


CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

INSERT INTO comment (recipe_id, user_id, content) 
VALUES (1, 2, ' Super recette ! Merci beaucoup.'),
(1, 3, ' Super recette ! Très bien.');


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

-- Pancakes 
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (16, 200, 'g', 110),(16, 2, '', 111), (16, 30, 'g', 108), (16, 300, 'ml', 112), (16, 1, 'sachet de', 113), (16, 50, 'g', 109), (16, 1, 'pincée de', 133);

-- Gratin dauphinois
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (17, 1, '', 110), (17, 800, 'g', 44), (17, 300, 'ml', 118), (17, 50, 'g', 119), (17, 2, '', 111), (17, 2, 'gousses', 1), (17, 1, 'brin', 64), (17, 50, 'g', 108), (17, 1, 'pincée de', 133),(17, 1, 'pincée de', 132); 

-- Salade niçoise
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (18, 1, '', 158), (18, 200, 'g', 106), (18, 150, 'g', 157), (18, 4, '', 111), (18, 200, 'g', 66), (18, 1, '', 50), (18, 1, '', 46), (18, 1, '', 39), (18, 50, 'g', 152), (18, 1, 'càs', 125), (18, 1, 'càs', 120), (18, 1, 'càs', 143), (18, 1, 'pincée de', 133), (18, 1, 'pincée de', 132);


-- Baba au rhum
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (19, 250, 'g de', 110), (20, 3, '', 111), (19, 20, 'g de', 109), (19, 100, 'g de', 108), (19, 1, 'pincée de', 133), (19, 250, 'ml de', 135), (19, 100, 'ml de', 156), (19, 250, 'ml de', 114), (19, 30, 'g de', 115); 


-- Spaghetti aglio e olio
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id) 
VALUES (20, 400, 'g de', 126), (20, 4, 'gousses d', 1), (20, 100, 'ml de', 125), (20, 1, 'pincée de', 132), (20, 1, 'pincée de', 133), (20, 1, 'pincée de', 136), (20, 1, '', 64); 

-- Coq au vin
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id) 
VALUES (21, 1.5, 'kg de', 148), (21, 200, 'g de', 145), (21, 1, 'bouteille de', 124), (21, 200, "g d'", 42), (21, 2, "gousses d'", 1),(21, 200, 'g de', 10), (21, 200, 'g de', 13), (21, 1, 'branche de', 39), (21, 1, 'branche de', 12), (21, 50, 'g de', 108), (21, 50, 'ml de', 135), (21, 1, 'pincée de', 133), (21, 1, 'pincée de', 132); 

-- Crème brûlée
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id) 
VALUES (22, 500, 'ml de', 112), (22, 5, '', 111), (22, 100, 'g de', 109), (22, 1, 'gousse de', 116), (22, 50, 'g de', 115); 

-- Tomate garnie
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (23, 1, "", 66), (23, 1, "poignée de", 159), (23, 1, "bonne cas de", 106), (23, 1, "demi", 158), (23, 1, "pincée de", 165), (23, 2-3, "branche de", 24), (23, 2, "cas de", 160);

-- Verrine saumon avocat et skyr
INSERT INTO recipe_ingredient (recipe_id, quantity, unit, ingredient_id)
VALUES (24, 200, "g de", 161), (24, 2, "cas de", 166),
(24, 100, "g d'émincés de", 162), (24, 1, "cas d'", 163), (24, 1, "", 69), (24, 1, "poignée de", 24);
