const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here (/api/items)
/* ************************************************************************* */

const { browse, read, add } = require("../controllers/itemActions");

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);

module.exports = router;
