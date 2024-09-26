const express = require("express");

const router = express.Router();

const categoryActions = require("../controllers/categoryActions");

router.get("/", categoryActions.browse);
router.get("/:id", categoryActions.read);

// router.get("/random/:id", categoryActions.readRandomByCategory);

router.post("/", categoryActions.add); // Ajouter une nouvel difficulté
router.put("/:id", categoryActions.edit); // Modifier une difficulté

module.exports = router;
