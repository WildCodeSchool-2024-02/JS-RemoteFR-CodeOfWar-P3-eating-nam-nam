const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create({ userId, recipeId }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, recipe_id) VALUES (?, ?)`,
      [userId, recipeId]
    );

    return result.insertId;
  }

  async read({ userId = null, recipeId = null }) {
    if (!userId && !recipeId) throw new Error("Either the userId or the recipeid must be specified");

    let query;
    let params;

    if (userId && recipeId) {
      query = `SELECT * FROM ${this.table} WHERE user_id = ? and recipe_id = ?`;
      params = [userId, recipeId]
    } else if (userId) {
      query = `SELECT * FROM ${this.table} WHERE user_id = ?`;
      params = [parseInt(userId, 10)];
    } else if (recipeId) {
      query = `SELECT * FROM ${this.table} WHERE recipe_id = ?`;
      params = [recipeId];
    }

    const [rows] = await this.database.query(query, params);
    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async delete({ userId, recipeId }) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ? AND recipe_id = ?`,
      [userId, recipeId]
    );
    return result.affectedRows;
  }
}

module.exports = FavoriteRepository;
