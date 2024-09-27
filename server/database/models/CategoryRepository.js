const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async create(category) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [category.id, category.name]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readWithRecipe(id, limit = 5) {
    const [rows] = await this.database.query(
      `
      SELECT ${this.table}.*, recipe.id AS recipeId, recipe.title AS recipeTitle from ${this.table}
      INNER JOIN recipe ON ${this.table}.id = recipe.category_id
      WHERE ${this.table}.id = ? ORDER BY RAND() LIMIT ?
      `,

      [id, limit, 10]
    );

    const response = {
      id: rows[0].id,
      name: rows[0].name,
      recipes: [],
    };

    rows.forEach((row) => {
      response.recipes.push({ id: row.recipeId, title: row.recipeTitle });
    });
    return response;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(category) {
    const [result] = await this.database.query(
      `update ${this.table} set id = ? WHERE name = ?`,
      [category.id, category.name]
    );
    return result.affectedRows;
  }
}

module.exports = CategoryRepository;
