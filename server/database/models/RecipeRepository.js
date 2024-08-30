const AbstractRepository = require("./AbstractRepository");

class RecipeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "recipe" as configuration
    super({ table: "recipe" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all recipes from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing recipe

  // async update(recipe) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an recipe by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = RecipeRepository;
