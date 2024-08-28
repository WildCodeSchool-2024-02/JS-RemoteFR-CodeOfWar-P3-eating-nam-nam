// Load the express module to create a web application

const express = require("express");

const app = express();

/* ************************************************************************* */

// Import the API router
const router = require("./router");

// Mount the API router under the "/api" endpoint
app.use("/api", router);

/* ************************************************************************* */

module.exports = app;
