const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    super({ table: "recipe" });
  }

  async create(recipe) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, category_id, difficulty_id, image_url, title, description, cooking_time, preparation_time) values (?, ?, ?, ?, ?, ?, ?, ?)`,

      [
        recipe.userId,
        recipe.categoryId,
        recipe.difficultyId,
        recipe.image_url,
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
      ingredient.name AS ingredient_name,
      category.name AS category_name,
      comment.id AS comment_id,
      comment.content AS comment_content,
      comment.created_at AS comment_created_at,
      user.username AS comment_user_pseudo
      FROM ${this.table} 
      INNER JOIN difficulty 
      ON recipe.difficulty_id = difficulty.id
      INNER JOIN category
      ON recipe.category_id = category.id
      LEFT JOIN recipe_ingredient 
      ON recipe_ingredient.recipe_id = recipe.id
      LEFT JOIN ingredient
      ON recipe_ingredient.ingredient_id = ingredient.id
      LEFT JOIN comment
      ON recipe.id = comment.recipe_id
      LEFT JOIN user ON comment.user_id = user.id
      WHERE recipe.id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    const recipe = {
      id: rows[0].id,
      image_url: rows[0].image_url,
      user_id: rows[0].user_id,
      title: rows[0].title,
      description: rows[0].description,
      cooking_time: rows[0].cooking_time,
      preparation_time: rows[0].preparation_time,
      instruction: rows[0].instruction,
      difficulty: rows[0].difficulty_name,
      category: rows[0].category_name,
      ingredients: [],
      comments: [],
    };

    const ingredientSet = new Set();

    rows.forEach((row) => {
      if (row.ingredient_name) {
        const ingredient = `${row.quantity} ${row.unit} ${row.ingredient_name}`;
        if (!ingredientSet.has(ingredient)) {
          ingredientSet.add(ingredient);
          recipe.ingredients.push({
            unit: row.unit,
            name: row.ingredient_name,
            quantity: row.quantity,
          });
        }
      }
      if (row.comment_id) {
        recipe.comments.push({
          id: row.comment_id,
          content: row.comment_content,
          create_at: row.comment_created_at,
          user_pseudo: row.comment_user_pseudo,
        });
      }
    });

    return recipe;
  }

  async update(recipe) {
    const [result] = await this.database.query(
      `update ${this.table} set user_id = ?,
      image_url = ?, category_id = ?, difficulty_id = ?, title = ?, description = ?, cooking_time = , preparation_time = ?,instruction = ? where id = ?`,
      [
        recipe.user_id,
        recipe.image_url,
        recipe.category_id,
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

  async search(term) {
    const [rows] = await this.database.query(
      `SELECT id, title FROM ${this.table} WHERE title LIKE ?`,
      [`%${term}%`]
    );
    return rows;
  }
}

module.exports = RecipeRepository;
