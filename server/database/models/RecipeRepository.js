const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "recipe" as configuration
    super({ table: "recipe" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all recipes from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
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
    // Execute the SQL UPDATE query to update a specific category
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

    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = RecipeRepository;
