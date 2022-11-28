const models = require("../models");

class ArticleController {
  static browse = (req, res) => {
    models.article
      .findByAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.article
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

  static readToUpdate = (req, res, next) => {
    models.article
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
          req.articleToUpdate = rows[0];
          next();
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const { article } = req;

    // TODO validations (length, format...)

    article.id = parseInt(req.params.id, 10);

    models.article
      .update(article)
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

  static add = (req, res) => {
    let article = req.body;
    if (req.article) {
      article = req.article;
    }
    // TODO validations (length, format...)

    models.article
      .insert(article)
      .then(([result]) => {
        res.status(201).send({ ...article, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.article
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

module.exports = ArticleController;
