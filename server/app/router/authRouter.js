const express = require("express");

const router = express.Router();

const authActions = require("../controllers/authActions");

router.post("/login", authActions.login);

module.exports = router;
