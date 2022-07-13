const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  static table = "team";

  findByAll() {
    return this.connection.query(`SELECT * FROM ${TeamManager.table}`);
  }

  insert(team) {
    return this.connection.query(
      `INSERT INTO ${TeamManager.table} (title, textId, pictureId) VALUES (?,?,?) `,
      [team.title, team.textId, team.pictureId]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${TeamManager.table} set title = ? where id = ?`,
      [team.title, team.id]
    );
  }

  findByTeam(teamId) {
    return this.connection.query(
      `SELECT t.id, t.title, te.body, te.page, te.textSection, p.file  FROM ${TeamManager.table} t INNER JOIN text te ON t.textId = te.id JOIN pictures p ON t.pictureId = p.id`,
      [teamId]
    );
  }
}

module.exports = TeamManager;
