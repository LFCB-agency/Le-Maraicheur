const express = require('express')

const {PicturesController} = require("../controllers")

const router = express.Router()

router.get("/Pictures", PicturesController.Browse)
router.get("/Pictures/:id", PicturesController.read)
router.post("/Pictures", PicturesController.add)
router.put("/Pictures/:id", PicturesController.edit)
router.delete("/Pictures/:id", PicturesController.delete)

module.exports = router;
