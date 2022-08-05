const express = require("express");

const router = express.Router();
const multer = require("multer");

const { ArticleController } = require("../controllers");

const storage = multer.diskStorage({
  // on defini le chemin ou les fichiers seront stockés
  destination: (_req, _file, cb) => {
    cb(null, "public/assets/images");
  },
  // filename defini le nom du fichier dans le dossier
  // dans ce cas là il sera nommé ex : "2022-20-06-nom-du-fichier"
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// on configure multer pour sauvegarder un seul fichier
// qui est dans le req.body.file

const upload = multer({ storage }).single("image");

router.get("/", ArticleController.browse);
router.get("/:id", ArticleController.read);
router.put("/:id", ArticleController.edit);
router.post(
  "/upload",
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      const pictureData = JSON.parse(req.body.pictureData);
      // console.log({ pictureData });

      req.article = {
        title: pictureData.articleTitle,
        link: pictureData.articleink,
        image: req.file.filename,
        alt: pictureData.description,
      };

      return next();
    });
  },
  ArticleController.add
);
router.delete("/:id", ArticleController.delete);

module.exports = router;
