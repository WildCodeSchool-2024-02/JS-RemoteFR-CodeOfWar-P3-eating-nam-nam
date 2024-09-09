const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
  userActions,
} = require("../controllers/userActions");

const { hashPassword } = require("../services/auth");

router.get("/", browse); // Pour lister tous les utilisateurs.

router.get("/:id", read); // Pour afficher un utilisateur spécifique

router.post("/", add); // Pour ajouter un nouvel utilisateur

router.put("/:id", edit); // Pour modifier un utilisateur existant

router.delete("/:id", destroy); // Pour supprimer un utilisateur

router.post("/users", hashPassword, userActions.add); // Hacher le mot de passe

module.exports = router;
