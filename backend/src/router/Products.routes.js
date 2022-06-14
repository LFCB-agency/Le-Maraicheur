const express = require("express");

const { ProductsController } = require("../controllers");

const router = express.Router();

router.get("/Products", ProductsController.browse);
router.get("/Products/:id", ProductsController.read);
router.put("/Products/:id", ProductsController.edit);
router.post("/Products", ProductsController.add);
router.delete("/Products/:id", ProductsController.delete);

module.exports = router;
