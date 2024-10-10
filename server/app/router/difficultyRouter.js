const express = require("express");

const router = express.Router();

const difficultytActions = require("../controllers/difficultyActions");

router.get("/", difficultytActions.browse); // Récupérer toutes les difficultés
router.get("/stepRecipe/:id", difficultytActions.read); // Récupérer une difficulté par ID
router.post("/", difficultytActions.add); // Ajouter une nouvel difficulté
router.put("/:id", difficultytActions.edit); // Modifier une difficulté

module.exports = router;
