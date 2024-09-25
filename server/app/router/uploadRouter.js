const express = require("express");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const { add } = require("../controllers/uploadActions");
const { verifyToken } = require("../services/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    const id = uuidv4();
    const filename = `${id}${path.extname(file.originalname)}`;
    cb(null, filename);
    req.body.filename = filename;
  },
});

const upload = multer({ storage });

router.post("/", verifyToken, upload.single("file"), add);

module.exports = router;
