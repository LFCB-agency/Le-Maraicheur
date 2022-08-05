const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  static table = "article";

  findByAll() {
    return this.connection.query(`SELECT * FROM ${ArticleManager.table}`);
  }

  insert(article) {
    return this.connection.query(`INSERT INTO ${ArticleManager.table} SET ?`, [
      article,
    ]);
  }

  update(article) {
    return this.connection.query(
      `update ${ArticleManager.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = ArticleManager;
