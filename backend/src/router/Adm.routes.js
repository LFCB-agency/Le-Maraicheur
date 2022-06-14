const express = require('express')

const {AdmController} = require("../controllers")

const router = express.Router()

router.get("/Adm", AdmController.Browse)
router.get("/Adm/:id", AdmController.read)
router.post("/Adm", AdmController.add)
router.put("/Adm/:id", AdmController.edit)
router.delete("/Adm/:id", AdmController.delete)

module.exports = router;
