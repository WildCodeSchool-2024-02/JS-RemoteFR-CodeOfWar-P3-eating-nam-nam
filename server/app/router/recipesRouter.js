const express = require("express");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { verifyToken } = require("../services/auth");
const recipesActions = require("../controllers/recipeActions");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    const id = uuidv4();
    const filename = `${id}${path.extname(file.originalname)}`;
    cb(null, filename);
    req.body.filename = filename;
  },
});

const upload = multer({ storage });

router.get("/", recipesActions.browse);

router.get("/search", recipesActions.browseFilteredRecipes);

router.get("/random", recipesActions.readRandom);

router.get("/:id", recipesActions.read); // Récupérer une recette par ID

router.post("/", verifyToken, upload.single("file"), recipesActions.add); // Créer une nouvelle recette

router.put("/:id", recipesActions.edit); // Modifier une recette

router.delete("/:id", verifyToken, recipesActions.destroy); // Supprimer une recette

module.exports = router;
