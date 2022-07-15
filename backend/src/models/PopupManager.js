const AbstractManager = require("./AbstractManager");

class PopupManager extends AbstractManager {
  static table = "popup";

  findByAll() {
    return this.connection.query(`SELECT * FROM ${PopupManager.table}`);
  }

  insert(popup) {
    return this.connection.query(
      `INSERT INTO ${PopupManager.table} (name) VALUES (?) `,
      [popup.name]
    );
  }

  update(popup) {
    return this.connection.query(
      `update ${PopupManager.table} set name = ? where id = ?`,
      [popup.name, popup.id]
    );
  }
}

module.exports = PopupManager;
