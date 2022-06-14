const express = require('express')

const {PopUpController} = require("../controllers")

const router = express.Router()

router.get("/PopUp", PopUpController.Browse)
router.get("/PopUp/:id", PopUpController.read)
router.post("/PopUp", PopUpController.add)
router.put("/PopUp/:id", PopUpController.edit)
router.delete("/PopUp/:id", PopUpController.delete)

module.exports = router;

