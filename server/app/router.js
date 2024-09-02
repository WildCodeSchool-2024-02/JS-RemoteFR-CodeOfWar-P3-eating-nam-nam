const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const userRouter = require("./router/userRouter");

/* ************************************************************************* */
// Define Your API Routes Here (/api)
/* ************************************************************************* */

router.use("/items", itemsRouter);
router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
