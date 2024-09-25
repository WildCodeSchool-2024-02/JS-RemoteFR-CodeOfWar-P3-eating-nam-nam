const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    super({ table: "recipe" });
  }

  async create(recipe) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, difficulty_id, title, description, cooking_time, preparation_time) values (?, ?, ?, ?, ?, ?)`,
      [
        recipe.userId,
        recipe.difficultyId,
        recipe.title,
        recipe.description,
        recipe.cookingTime,
        recipe.preparationTime,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async readRandom(limit = 1) {
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY RAND() LIMIT ? `,
      [parseInt(limit, 10)]
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT recipe.*, 
      difficulty.name AS difficulty_name, 
      recipe_ingredient.quantity,
      recipe_ingredient.unit,
       ingredient.name AS ingredient_name
      FROM ${this.table} 
      INNER JOIN difficulty 
      ON recipe.difficulty_id = difficulty.id
      INNER JOIN recipe_ingredient 
      ON recipe_ingredient.recipe_id = recipe.id
      INNER JOIN ingredient
      ON recipe_ingredient.ingredient_id = ingredient.id
      WHERE recipe.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    const recipe = {
      id: rows[0].recipe_id,
      title: rows[0].title,
      description: rows[0].description,
      cooking_time: rows[0].cooking_time,
      preparation_time: rows[0].preparation_time,
      instruction: rows[0].instruction,
      difficulty: rows[0].difficulty_name,
      ingredients: rows.map((row) => ({
        unit: row.unit,
        name: row.ingredient_name,
        quantity: row.quantity,
      })),
    };

    return recipe;
  }

  async update(recipe) {
    const [result] = await this.database.query(
      `update ${this.table} set user_id = ?, difficulty_id = ?, title = ?, description = ?, cooking_time = , preparation_time = ?,instruction = ? where id = ?`,
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
