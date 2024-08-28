const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here (/api/items)
/* ************************************************************************* */

const { browse, read, add } = require("../controllers/itemActions");

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

module.exports = router;