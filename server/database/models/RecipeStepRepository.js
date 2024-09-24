const AbstractRepository = require("./AbstractRepository");

class RecipeStepRepository extends AbstractRepository {
  constructor() {
    super({ table: "recipe_step" });
  }

  async create(recipeId, step) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, step_number, description) VALUES (?, ?, ?)`,
      [recipeId, step.number, step.description]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(recipeId, step) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET description = ? WHERE recipe_id = ? AND step_number = ?`,
      [step.description, recipeId, step.number]
    );
    return result.affectedRows;
  }

  async delete(recipeId, step) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE recipe_id = ? AND step_number = ?`,
      [recipeId, step.number]
    );
    return result.affectedRows;
  }
}

module.exports = RecipeStepRepository;
