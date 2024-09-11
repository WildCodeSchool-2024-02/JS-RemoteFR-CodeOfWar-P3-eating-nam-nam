const express = require("express");

const router = express.Router();

const authActions = require("../controllers/authActions");

const auth = require("../services/auth");

router.post("/login", auth.verifyPassword, auth.createToken, authActions.login);

module.exports = router;
