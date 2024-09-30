const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    if ("recipeId" in req.query || "userId" in req.query) {
      const favorite = await tables.favorite.read(req.query);
      if (!favorite.length) res.sendStatus(404);
      else res.status(200).json( favorite );
    } else {
      const favorites = await tables.favorite.readAll();
      res.json(favorites);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const favorite = req.body;
  try {
    const insertId = await tables.favorite.create(favorite);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.favorite.destroy(req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
  destroy,
};
