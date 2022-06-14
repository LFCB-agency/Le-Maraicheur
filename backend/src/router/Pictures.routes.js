const express = require("express");

const { PicturesController } = require("../controllers");

const router = express.Router();

router.get("/", PicturesController.Browse);
router.get("/:id", PicturesController.read);
router.post("/", PicturesController.add);
router.put("/:id", PicturesController.edit);
router.delete("/:id", PicturesController.delete);

module.exports = router;
