const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  static table = "team";

  findByAll() {
    return this.connection.query(`SELECT * FROM ${TeamManager.table}`);
  }

  insert(team) {
    return this.connection.query(
      `INSERT INTO ${TeamManager.table} (name) VALUES (?) `,
      [team.name]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${TeamManager.table} set name = ? where id = ?`,
      [team.name, team.id]
    );
  }
}

module.exports = TeamManager;
