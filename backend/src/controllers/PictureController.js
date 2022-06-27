/* eslint-disable consistent-return */

const models = require("../models");

class PictureController {
  static browse = (req, res) => {
    const { picSection, categories } = req.query;
    const filter = {};
    if (picSection) {
      filter.picSection = picSection;
    }
    if (categories) {
      filter.categories = categories;
    }
    if (filter) {
      models.pictures
        .findAllWithFilter(filter)
        .then(([rows]) => {
          res.send(rows);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } else {
      models.pictures
        .findAll()
        .then(([rows]) => {
          res.send(rows);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  static read = (req, res) => {
    models.pictures
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static add = async (req, res) => {
  //   try {
  //     const [result] = await models.pictures.insert({
  //       file: req.pictureData.file,
  //       alt: req.pictureData.alt,
  //       // categories: req.pictureData.categories,
  //       // picSection: parseInt(req.pictureData.picSection, 10),
  //     });
  //     if (result.affectedRows === 0) {
  //       return res.status(404).send("Couldn't insert pictures");
  //     }
  //     const [[imageCreated]] = await models.pictures.insert(...picture);
  //     return res.status(201).json(imageCreated);
  //   } catch (err) {
  //     return res.status(500).send(err.message);
  //   }
  // };

  static add = async (req, res) => {
    let picture = req.body;
    if (req.picture) {
      picture = req.picture;
    }

    const picturesIsValid = await models.pictures.validPicturesToCreate(
      picture
    );

    if (!picturesIsValid) {
      return res.status(400).send("You must provide all data to add a picture");
    }

    models.pictures
      .insert(picture)
      .then(([result]) => {
        return res.status(201).send({ ...picture, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        return res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.pictures
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const pictures = req.body;

    // TODO validations (length, format...)

    pictures.id = parseInt(req.params.id, 10);

    models.pictures
      .update(pictures)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404).send("Picture not found");
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static editPicture = async (req, res) => {
  //   try {
  //     const [result] = await models.pictures.update({
  //       // id: req.id,
  //       file: req.file,
  //       alt: req.alt,
  //     });
  //     if (result.affectedRows === 0) {
  //       return res.status(404).send("Picture not found");
  //     }
  //     const [[pictureUpdated]] = await models.pictures.find(pictures.id);
  //     return res.status(201).json(pictureUpdated);
  //   } catch (err) {
  //     return res.status(500).send(err.message);
  //   }
  // };
}
module.exports = PictureController;
