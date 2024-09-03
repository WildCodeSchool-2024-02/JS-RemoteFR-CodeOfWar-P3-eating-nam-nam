const AbstractRepository = require("./AbstractRepository");

class DifficultyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "Difficulty" });
  }

  // The C of CRUD - Create operation

  async create(difficulty) {
    // Execute the SQL INSERT query to add a new item to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?, ?)`,
      [difficulty.id, difficulty.name]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation

  async update(difficulty) {
    // Execute the SQL UPDATE query to modify an existing user
    const [result] = await this.database.query(
      `update ${this.table} set id = ?, WHERE name = ?`,
      [difficulty.id, difficulty.name]
    );

    // Return the number of affected rows by the update
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
}

module.exports = DifficultyRepository;
