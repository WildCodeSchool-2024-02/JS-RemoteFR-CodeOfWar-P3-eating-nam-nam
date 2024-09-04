const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    super({ table: "recipe" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(recipe) {
    const [result] = await this.database.query(
      `update ${this.table} set user_id = ?, difficulty_id = ?, title = ?,
       description = ?, cooking_time = , preparation_time = ?,
       instruction = ? where id = ?`,
      [
        recipe.user_id,
        recipe.difficulty_id,
        recipe.title,
        recipe.description,
        recipe.cooking_time,
        recipe.preparation_time,
        recipe.instruction,
        recipe.id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = RecipeRepository;
