const router = require("express").Router();
const { EmailController } = require("../controllers");

router.get("/text", EmailController.sendWithText);
router.get("/html", EmailController.sendWithHtml);
router.get("/html-and-file", EmailController.sendWithHtmlAndFile);
router.get("/hbs", EmailController.sendWithHbsTemplate);
router.post(
  "/contactForm",
  EmailController.Verify,
  EmailController.sendTest,
  EmailController.sendWithSuccess
);

module.exports = router;
