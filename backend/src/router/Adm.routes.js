const express = require("express");

const { AdmController } = require("../controllers");

const router = express.Router();

// router.get("/", (req, res) => {
//   return res.send("Hello Adm routes");
// });
// router.get("/", AdmController.browse);

router.get("/", AdmController.browse);
router.get("/logout", AdmController.authorization, AdmController.clearCookie);
router.get("/:id", AdmController.read);

router.post("/login", AdmController.login);
router.post("/", AdmController.register);
router.put(
  "/:id",
  AdmController.edit,
  AdmController.authorization,
  AdmController.isSameId
);
router.delete("/:id", AdmController.delete);

module.exports = router;
