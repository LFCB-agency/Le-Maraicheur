const express = require("express");

const { PopUpController } = require("../controllers");

const router = express.Router();

router.get("/", PopUpController.Browse);
router.get("/:id", PopUpController.read);
router.post("/", PopUpController.add);
router.put("/:id", PopUpController.edit);
router.delete("/:id", PopUpController.delete);

module.exports = router;
