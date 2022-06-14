const express = require('express')

const {PreOrderController} = require("../controllers")

const router = express.Router()

router.get("/PreOrder", PreOrderController.Browse)
router.get("/PreOrder/:id", PreOrderController.read)
router.post("/PreOrder", PreOrderController.add)
router.put("/PreOrder/:id", PreOrderController.edit)
router.delete("/PreOrder/:id", PreOrderController.delete)

module.exports = router;
