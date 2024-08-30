const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const ingredientsRouter = require("./router/ingredientsRouter");
/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */
/* ************************************************************************* */

router.use("/ingredients", ingredientsRouter);
router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
