const express = require("express");

const { ProductsController } = require("../controllers");

const router = express.Router();

router.get("", ProductsController.browse);
router.get("/:id", ProductsController.read);
router.put("/:id", ProductsController.edit);
router.post("", ProductsController.add);
router.delete("/:id", ProductsController.delete);

module.exports = router;
