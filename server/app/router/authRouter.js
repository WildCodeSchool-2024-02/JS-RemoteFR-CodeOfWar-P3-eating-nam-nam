const express = require("express");

const router = express.Route();

const authActions = require("../controllers/authActions");

router.post("/login", authActions.login);
