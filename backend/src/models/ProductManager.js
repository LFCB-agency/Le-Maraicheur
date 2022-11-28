const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(`INSERT INTO ${ProductManager.table} SET ?`, [
      product,
    ]);
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${ProductManager.table}`);
  }

  findByVisible() {
    return this.connection.query(
      `SELECT * FROM ${ProductManager.table} WHERE visible = 1`
    );
  }

  findById(productId) {
    return this.connection.query(
      `SELECT * FROM ${ProductManager.table} WHERE id = ?`,
      [productId]
    );
  }

  findProductById(productId) {
    return this.connection
      .query(`SELECT * FROM ${ProductManager.table} WHERE id = ?`, [productId])
      .then((result) => result[0]);
  }

  update(product) {
    return this.connection.query(
      `UPDATE ${ProductManager.table} SET ? WHERE id = ?`,
      [product, product.id]
    );
  }

  deleteProduct(productId) {
    return this.connection.query(
      `DELETE FROM ${ProductManager.table} WHERE id =?`,
      [productId]
    );
  }
}
module.exports = ProductManager;
