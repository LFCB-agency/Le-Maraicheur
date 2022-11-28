const express = require("express");

const { ProductController } = require("../controllers");

const router = express.Router();

router.get("/", ProductController.browse);
router.get("/visible", ProductController.browseByVisible);
router.get("/:id", ProductController.read);
router.post("/upload", ProductController.uploadProduct, ProductController.add);
router.put("/:id", ProductController.edit);
router.delete("/:id", ProductController.delete);

module.exports = router;
