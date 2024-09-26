const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "Category" });
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
