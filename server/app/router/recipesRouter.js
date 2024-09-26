const express = require("express");

const router = express.Router();

const recipesActions = require("../controllers/recipeActions");

const { verifyToken } = require("../services/auth");

router.get("/", recipesActions.browse); // Récupérer toutes les recettes

router.get("/random", recipesActions.readRandom);

router.get("/:id", recipesActions.read); // Récupérer une recette par ID

router.post("/", verifyToken, recipesActions.add); // Créer une nouvelle recette

router.put("/:id", recipesActions.edit); // Modifier une recette

router.delete("/:id", verifyToken, recipesActions.destroy); // Supprimer une recette

module.exports = router;
