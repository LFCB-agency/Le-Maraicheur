const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
const models = require("../models");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "public/assets/images");
  },

  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// const deleteMarket = (pathMarket) => {
//   try {
//     fs.unlinkSync(pathMarket);
//   } catch (err) {
//     console.error(err);
//   }
// };

const upload = multer({ storage }).single("image");

class ProductController {
  static uploadProduct = (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      const pictureData = JSON.parse(req.body.pictureData);
      req.product = {
        title: pictureData.productTitle,
        link: pictureData.productLink,
        image: req.file.filename,
        alt: pictureData.picDescript,
      };
      return next();
    });
  };

  static add = async (req, res) => {
    let product = req.body;
    if (req.product) {
      product = req.product;
    }
    models.product
      .insert(product)
      .then(([result]) => {
        return res.status(201).send({ ...product, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        return res.sendStatus(500);
      });
  };

  static browse = (req, res) => {
    models.product
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByVisible = (req, res) => {
    models.product
      .findByVisible()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.product
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
    const product = req.body;

    // TODO validations (length, format...)

    product.id = parseInt(req.params.id, 10);

    models.product
      .update(product)
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

  static delete = (req, res) => {
    models.product
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

module.exports = ProductController;
