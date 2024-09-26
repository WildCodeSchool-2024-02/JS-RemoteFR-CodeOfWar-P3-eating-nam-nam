const express = require("express");

const router = express.Router();

const commentActions = require("../controllers/commentActions");
const { verifyToken } = require("../services/auth");

router.get("/", commentActions.browse);
router.get("/:id", commentActions.read);
router.post("/", verifyToken, commentActions.add);
router.put("/:id", commentActions.edit);
router.delete("/:id", commentActions.destroy);

module.exports = router;
