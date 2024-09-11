const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const difficulty = await tables.difficulty.readAll();
    res.json(difficulty);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const difficulty = await tables.difficulty.read(Number(req.params.id));

    if (difficulty != null) {
      res.json(difficulty);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const difficulty = req.body;

  try {
    const insertId = await tables.difficulty.create(difficulty);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const difficulty = req.body;
  try {
    await tables.difficulty.update(difficulty);
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
