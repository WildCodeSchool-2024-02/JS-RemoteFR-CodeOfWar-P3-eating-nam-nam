const express = require("express");

const router = express.Router();

const difficultytActions = require("../controllers/difficultyActions");

router.get("/", difficultytActions.browse);
router.get("/:id", difficultytActions.read);
router.post("/", difficultytActions.add);
router.put("/:id", difficultytActions.edit);

module.exports = router;
