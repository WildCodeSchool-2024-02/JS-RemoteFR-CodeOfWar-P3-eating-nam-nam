const express = require("express");

const router = express.Router();

const favoriteActions = require("../controllers/favoriteActions");

router.get("/", favoriteActions.browse);
router.post("/", favoriteActions.add);
router.delete("/", favoriteActions.destroy);

module.exports = router;
