const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const recipesRouter = require("./router/recipesRouter");
const ingredientsRouter = require("./router/ingredientsRouter");
const userRouter = require("./router/userRouter");

/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */
/* ************************************************************************* */

router.use("/ingredients", ingredientsRouter);
router.use("/items", itemsRouter);
router.use("/recipes", recipesRouter);
router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
