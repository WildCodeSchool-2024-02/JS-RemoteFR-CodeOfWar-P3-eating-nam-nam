const AbstractRepository = require("./AbstractRepository");

class DifficultyRepository extends AbstractRepository {
  constructor() {
    super({ table: "Difficulty" });
  }

  async create(difficulty) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [difficulty.id, difficulty.name]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT difficulty.name
FROM recipe
INNER JOIN difficulty
ON difficulty.id = recipe.difficulty_id;`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(difficulty) {
    const [result] = await this.database.query(
      `update ${this.table} set id = ? WHERE name = ?`,
      [difficulty.id, difficulty.name]
    );
    return result.affectedRows;
  }
}

module.exports = DifficultyRepository;
