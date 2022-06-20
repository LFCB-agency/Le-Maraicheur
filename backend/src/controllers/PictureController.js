/* eslint-disable consistent-return */
const models = require("../models");

class PictureController {
  static browse = (req, res) => {
    models.pictures
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
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

  static edit = (req, res) => {
    const pictures = req.body;

    pictures.id = parseInt(req.params.id, 10);

    models.pictures
      .update(pictures)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = async (req, res) => {
    const pictures = req.body;

    const picturesIsValid = await models.pictures.validPicturesToCreate(
      pictures
    );

    if (!picturesIsValid) {
      return res.status(400).send("You must provide all data to add a picture");
    }

    models.pictures
      .insert(pictures)
      .then(([result]) => {
        return res.status(201).send({ ...pictures, id: result.insertId });
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
}
module.exports = PictureController;
