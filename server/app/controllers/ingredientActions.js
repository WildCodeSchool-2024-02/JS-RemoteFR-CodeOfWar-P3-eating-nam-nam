const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();
    res.json(ingredients);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
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
