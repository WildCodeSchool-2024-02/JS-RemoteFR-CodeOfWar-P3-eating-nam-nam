const express = require("express");

const router = express.Router();

const authActions = require("../controllers/authActions");

const auth = require("../services/auth");

router.post("/login", auth.verifyPassword, auth.createToken, authActions.login);
router.post("/register", auth.hashPassword, authActions.register);
router.get("/", authActions.checkAuth);

module.exports = router;
