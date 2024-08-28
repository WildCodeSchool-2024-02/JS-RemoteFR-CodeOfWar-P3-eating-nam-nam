const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/items");

/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
