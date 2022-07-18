// const express = require("express");

// const { TeamController } = require("../controllers");

// const router = express.Router();
// const multer = require("multer");

// const storage = multer.diskStorage({
//   // on defini le chemin ou les fichiers seront stockés
//   destination: (_req, _file, cb) => {
//     cb(null, "public/assets/images");
//   },
//   // filename defini le nom du fichier dans le dossier
//   // dans ce cas là il sera nommé ex : "2022-20-06-nom-du-fichier"
//   filename: (_, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // on configure multer pour sauvegarder un seul fichier
// // qui est dans le req.body.file

// router.get("/", TeamController.browse);
// router.get("/:id", TeamController.read);
// router.put("/:id", TeamController.edit);
// router.post(
//   "/upload",
//   //   (req, res, next) => {
//   //     upload(req, res, (err) => {
//   //       if (err) {
//   //         return res.status(500).send(err.message);
//   //       }
//   //       const pictureData = JSON.parse(req.body.pictureData);
//   //       req.picture = {
//   //         id: req.params.id,
//   //         file: req.file.filename,
//   //         alt: pictureData.description,
//   //         categories: pictureData.categories,
//   //         picSection: pictureData.picSection,
//   //       };
//   //       return next();
//   //     });
//   //   },
//   //   PictureController.add,
//   //   (req, res, next) => {
//   //     add(req, res, (err) => {
//   //       if (err) {
//   //         return res.status(500).send(err.message);
//   //       }

//   //       const textData = JSON.parse(req.body.textData);
//   //       req.text = {
//   //         id: req.params.id,
//   //         title: textData.title,
//   //         body: textData.body,
//   //         page: textData.page,
//   //         textSection: textData.textSection,
//   //       };
//   //       return next();
//   //     });
//   //   },

//   //   TextController.add,

//   TeamController.add
// );
// router.delete("/:id", TeamController.delete);

// module.exports = router;
