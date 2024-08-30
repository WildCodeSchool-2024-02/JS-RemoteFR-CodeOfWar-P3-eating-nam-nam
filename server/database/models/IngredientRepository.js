const AbstractRepository = require("./AbstractRepository");

class IngredientRepository extends AbstractRepository {
  constructor() {
    super({ table: "ingredient" });
  }
  // The C of CRUD - Create operation

  async create(ingredient) {
    // Execute the SQL INSERT query to add a new ingredients to the "ingredient" table
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [ingredient.id, ingredient.name]
    );

    // Return the ID of the newly inserted ingredient
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the ingredient
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing ingredient

  // async update(ingredient) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = IngredientRepository;
