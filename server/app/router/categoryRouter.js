const express = require("express");

const router = express.Router();

const categoryRouter = require("../controllers/difficultyActions");

router.get("/", categoryRouter.browse); // Récupérer toutes les difficultés
router.get("/:id", categoryRouter.read); // Récupérer une difficulté par ID
router.post("/", categoryRouter.add); // Ajouter une nouvel difficulté
router.put("/:id", categoryRouter.edit); // Modifier une difficulté

module.exports = router;
