const express = require("express");

const { TeamController } = require("../controllers");

const router = express.Router();

router.get("/", TeamController.browse);
router.get("/:id", TeamController.read);
router.put("/:id", TeamController.edit);
router.post("", TeamController.add);
router.delete("/:id", TeamController.delete);

module.exports = router;
