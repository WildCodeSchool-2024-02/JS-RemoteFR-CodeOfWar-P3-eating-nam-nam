const AbstractRepository = require("./AbstractRepository");

class IngredientRepository extends AbstractRepository {
  constructor() {
    super({ table: "ingredient" });
  }

  async create(ingredient) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [ingredient.id, ingredient.name]
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

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(ingredient) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} set name = ? WHERE id = ?`,
      [ingredient.name, ingredient.id]
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

module.exports = IngredientRepository;
