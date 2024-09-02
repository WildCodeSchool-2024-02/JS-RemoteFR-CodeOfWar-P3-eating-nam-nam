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
    const ingredient = await tables.ingredient.read(Number(req.params.id));

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
  const ingredient = req.body;

  try {
    const insertId = await tables.ingredient.create(ingredient);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const ingredient = req.body;
  try {
    await tables.ingredient.update(ingredient);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.ingredient.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
