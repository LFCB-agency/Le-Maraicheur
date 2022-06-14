const express = require('express')

const {TextController} = require("../controllers")

const router = express.Router()

router.get("/Text", TextController.Browse)
router.get("/Text/:id", TextController.read)
router.post("/Text", TextController.add)
router.put("/Text/:id", TextController.edit)
router.delete("/Text/:id", TextController.delete)

module.exports = router;
