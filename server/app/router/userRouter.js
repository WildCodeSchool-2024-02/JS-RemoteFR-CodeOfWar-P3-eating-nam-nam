const express = require("express");

const router = express.Router();

const userActions = require("../controllers/userActions");

const { hashPassword } = require("../services/auth");

router.get("/", userActions.browse); // Pour lister tous les utilisateurs.

router.get("/:id", userActions.read); // Pour afficher un utilisateur spécifique

router.post("/", hashPassword, userActions.add); // Pour ajouter un nouvel utilisateur

router.put("/:id", userActions.edit); // Pour modifier un utilisateur existant

router.delete("/:id", userActions.destroy); // Pour supprimer un utilisateur

module.exports = router;
