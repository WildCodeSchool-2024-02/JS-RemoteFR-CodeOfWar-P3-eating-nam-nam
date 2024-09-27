const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const category = await tables.category.readAll();
    res.json(category);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const category = await tables.category.readWithRecipe(
      Number(req.params.id)
    );

    console.info(category);
    if (category != null) {
      res.status(200).json(category);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const category = req.body;

  try {
    const insertId = await tables.category.create(category);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const category = req.body;
  try {
    await tables.category.update(category);
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
};
