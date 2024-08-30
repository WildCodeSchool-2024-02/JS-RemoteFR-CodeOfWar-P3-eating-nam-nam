const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");

const recipesRouter = require("./router/recipesRouter");

/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */

router.use("/items", itemsRouter);
router.use("/recipes", recipesRouter);

/* ************************************************************************* */

module.exports = router;
