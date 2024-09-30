const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const recipesRouter = require("./router/recipesRouter");
const ingredientsRouter = require("./router/ingredientsRouter");
const commentRouter = require("./router/commentRouter");
const userRouter = require("./router/userRouter");
const difficultyRouter = require("./router/difficultyRouter");
const favoriteRouter = require("./router/favoriteRouter");
const authRouter = require("./router/authRouter");
const uploadRouter = require("./router/uploadRouter");
const categoryRouter = require("./router/categoryRouter");

router.use("/ingredients", ingredientsRouter);
router.use("/items", itemsRouter);
router.use("/recipes", recipesRouter);
router.use("/comments", commentRouter);
router.use("/user", userRouter);
router.use("/difficulty", difficultyRouter);
router.use("/favorite", favoriteRouter);
router.use("/upload", uploadRouter);
router.use("/category", categoryRouter);
router.use("/auth", authRouter);

module.exports = router;
