const express = require("express");

const router = express.Router();

const ingredientActions = require("../controllers/ingredientActions");

router.get("/", ingredientActions.browse);
router.get("/:id", ingredientActions.read);
router.post("/", ingredientActions.add);
router.put("/:id", ingredientActions.edit);
router.delete("/:id", ingredientActions.remove);

module.exports = router;
