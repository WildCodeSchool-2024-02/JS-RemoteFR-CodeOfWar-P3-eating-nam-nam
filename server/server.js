const express = require("express");

const app = express();

const ingredientRoutes = require("./app/routes/ingredientRoutes");

// Middleware pour parser les données JSON
app.use(express.json());

// Préfixe `/api` pour les routes d'ingrédients
app.use("/api/ingredients", ingredientRoutes);

// Définir le port d'écoute
const PORT = 3310; // Définir le port à 3310
app.listen(PORT, () => console.info(`Serveur démarré sur le port ${PORT}`));
