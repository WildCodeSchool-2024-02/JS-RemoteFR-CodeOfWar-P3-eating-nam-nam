const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/items");

/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */

const getController = require("./controllers/apiController");

router.use("/items", itemsRouter);

router.get("/", getController);

/* ************************************************************************* */

module.exports = router;
