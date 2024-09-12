const express = require("express");

// 1er étape: Importer multer
const multer = require("multer");

const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { add } = require("../controllers/uploadAction");

const router = express.Router();

// 2ème étape: Configurer multer :
// - Destination (destination)
// - Nom du fichier (filename)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/upload/");
    },
    filename: (req, file, cb) => {
        // mathieu_qui_cuisine.mp4
        const filename = uuidv4() + path.extname(file.originalname);
        cb(null, filename);
        req.body.filename = filename;
    }
})

// 3ème étape: Appliquer la configuration
const upload = multer({ storage });

// 4ème: Appliquer le middleware
router.post("/", upload.single("file"), add)

router.use("/", express.static("public/upload/"))

module.exports = router;