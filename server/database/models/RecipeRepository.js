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

  async readFilteredRecipes({ searchTerm = '', category = 'all', difficulty = 'all', limit = 15, offset = 0 }) {
    let query = `
      SELECT DISTINCT
        r.id, r.title, r.image_url, r.description,
        c.name AS category_name,
        d.name AS difficulty_name
      FROM recipe r
      INNER JOIN category c ON r.category_id = c.id
      INNER JOIN difficulty d ON r.difficulty_id = d.id
      LEFT JOIN recipe_ingredient ri ON r.id = ri.recipe_id
      LEFT JOIN ingredient i ON ri.ingredient_id = i.id
      WHERE 1=1
    `;

    const queryParams = [];

    if (searchTerm) {
      query += ` AND (r.title LIKE ? OR r.description LIKE ? OR i.name LIKE ?)`;
      queryParams.push(`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`);
    }

    if (category !== 'all') {
      query += ` AND c.name = ?`;
      queryParams.push(category);
    }

    if (difficulty !== 'all') {
      query += ` AND d.name = ?`;
      queryParams.push(difficulty);
    }

    query += ` GROUP BY r.id ORDER BY r.id DESC LIMIT ? OFFSET ?`;
    queryParams.push(limit, offset);

    const [rows] = await this.database.query(query, queryParams);

    return rows;
  }

  async read(id) {
    const query = `
      SELECT 
        recipe.*,
        difficulty.name AS difficulty_name,
        category.name AS category_name,
        recipe_ingredient.quantity,
        recipe_ingredient.unit,
        ingredient.name AS ingredient_name,
        comment.id AS comment_id,
        comment.content AS comment_content,
        comment.created_at AS comment_created_at,
        comment_user.username AS comment_user_pseudo,
        creator.username AS creator_username,
        recipe_step.step_number,
        recipe_step.description AS step_description
      FROM ${this.table}
      INNER JOIN difficulty ON recipe.difficulty_id = difficulty.id
      INNER JOIN category ON recipe.category_id = category.id
      LEFT JOIN recipe_ingredient ON recipe_ingredient.recipe_id = recipe.id
      LEFT JOIN ingredient ON recipe_ingredient.ingredient_id = ingredient.id
      LEFT JOIN comment ON recipe.id = comment.recipe_id
      LEFT JOIN user AS comment_user ON comment.user_id = comment_user.id
      LEFT JOIN user AS creator ON recipe.user_id = creator.id
      LEFT JOIN recipe_step ON recipe.id = recipe_step.recipe_id
      WHERE recipe.id = ?
      ORDER BY recipe_step.step_number
    `;
  
    const [rows] = await this.database.query(query, [id]);
  
    if (rows.length === 0) {
      return null;
    }
  
    const recipe = {
      id: rows[0].id,
      image_url: rows[0].image_url,
      user_id: rows[0].user_id,
      creator_username: rows[0].creator_username,
      title: rows[0].title,
      description: rows[0].description,
      cooking_time: rows[0].cooking_time,
      preparation_time: rows[0].preparation_time,
      instruction: rows[0].instruction,
      difficulty: rows[0].difficulty_name,
      category: rows[0].category_name,
      ingredients: [],
      comments: [],
      steps: [],
    };
  
    const ingredientSet = new Set();
    const commentSet = new Set();
    const stepSet = new Set();
  
    rows.forEach((row) => {
      if (row.ingredient_name && !ingredientSet.has(row.ingredient_name)) {
        ingredientSet.add(row.ingredient_name);
        recipe.ingredients.push({
          unit: row.unit,
          name: row.ingredient_name,
          quantity: row.quantity,
        });
      }
  
      if (row.comment_id && !commentSet.has(row.comment_id)) {
        commentSet.add(row.comment_id);
        recipe.comments.push({
          id: row.comment_id,
          content: row.comment_content,
          created_at: row.comment_created_at,
          user_pseudo: row.comment_user_pseudo,
        });
      }
  
      if (row.step_number && !stepSet.has(row.step_number)) {
        stepSet.add(row.step_number);
        recipe.steps.push({
          step_number: row.step_number,
          description: row.step_description,
        });
      }
    });
  
    recipe.steps.sort((a, b) => a.step_number - b.step_number);
  
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
      `SELECT id, title, image_url FROM ${this.table} WHERE title LIKE ?`,
      [`%${term}%`]
    );
    return rows;
  }
}

module.exports = RecipeRepository;
