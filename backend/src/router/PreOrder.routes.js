const express = require("express");

const { PreOrderController } = require("../controllers");

const router = express.Router();

router.get("", PreOrderController.Browse);
router.get("/:id", PreOrderController.read);
router.post("", PreOrderController.add);
router.put("/:id", PreOrderController.edit);
router.delete("/:id", PreOrderController.delete);

module.exports = router;
