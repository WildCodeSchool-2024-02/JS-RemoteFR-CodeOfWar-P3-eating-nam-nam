const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    super({ table: "comment" });
  }

  async create(comment) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, user_id, content) VALUES (?, ?, ?)`,
      [comment.recipe_id, comment.user_id, comment.content]
    );
    return { insertId: result.insertId, createdAt: result.created_at };
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `
      SELECT ${this.table}.*,
      user.username AS username,
      recipe.title AS recipe_title
      FROM ${this.table}
      INNER JOIN user ON comment.user_id = user.id
      INNER JOIN recipe ON comment.recipe_id = recipe.id
      `
    );
    return rows;
  }

  async readByRecipeId(recipeId) {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.*, user.username AS username 
       FROM ${this.table} 
       INNER JOIN user ON ${this.table}.user_id = user.id 
       WHERE recipe_id = ?`,
      [recipeId]
    );
    return rows;
  }

  async update(comment) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE id = ?`,
      [comment.content, comment.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CommentRepository;
