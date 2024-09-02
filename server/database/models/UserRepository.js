const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "User" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, name, password, email, role) values (?, ?, ?, ?, ?)`,
      [user.username, user.name, user.password, user.email, user.role]
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

  async update(id, user) {
    // Execute the SQL UPDATE query to modify an existing user
    const [result] = await this.database.query(
      `update ${this.table} set username = ?, name = ?, password = ?, email = ?, role = ? where id = ?`,
      [user.username, user.name, user.password, user.email, user.role, id]
    );

    // Return the number of affected rows by the update
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to remove a user by its ID
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return the number of affected rows by the deletion
    return result.affectedRows;
  }
}

module.exports = UserRepository;
