const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  findByAll() {
    return this.connection.query(`SELECT * FROM ${ProductsManager.table}`);
  }

  insert(products) {
    return this.connection.query(
      `INSERT INTO ${ProductsManager.table} (name) VALUES (?) `,
      [products.name]
    );
  }

  update(products) {
    return this.connection.query(
      `update ${ProductsManager.table} set name = ? where id = ?`,
      [products.name, products.id]
    );
  }
}

module.exports = ProductsManager;
