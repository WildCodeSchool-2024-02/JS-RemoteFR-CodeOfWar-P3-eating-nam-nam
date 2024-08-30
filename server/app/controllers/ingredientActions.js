const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();
    res.json(ingredients);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    // Fetch a specific ingredients from the database based on the provided ID
    const parseId = parseInt(req.params.id, 10);
    const ingredient = tables.ingredient.read((p) => p.id === parseId);

    if (ingredient != null) {
      res.json(ingredient);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  // do something
  try {
    console.info("coucou");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
