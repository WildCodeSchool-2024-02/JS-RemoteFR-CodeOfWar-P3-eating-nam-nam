const express = require("express");

const router = express.Router();

const ingredientActions = require("../controllers/ingredientActions");

router.get("/", ingredientActions.browse);
router.get("/:id", ingredientActions.read);
router.post("/", ingredientActions.add);

module.exports = router;
