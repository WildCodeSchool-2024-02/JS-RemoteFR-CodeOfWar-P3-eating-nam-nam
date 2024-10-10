const express = require("express");

const router = express.Router();

const ingredientActions = require("../controllers/ingredientActions");

router.get("/", ingredientActions.browse); // Récupérer tout les ingrédients
router.get("/:id", ingredientActions.read); // Récupérer un ingrédient par ID
router.post("/", ingredientActions.add); // Ajouter un nouvel ingrédient
router.put("/:id", ingredientActions.edit); // Modifier un ingrédient
router.delete("/:id", ingredientActions.destroy); // supprimer un ingrédient

module.exports = router;
