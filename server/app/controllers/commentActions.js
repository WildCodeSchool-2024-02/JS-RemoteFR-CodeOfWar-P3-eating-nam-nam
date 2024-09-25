const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment.readAll();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const comment = await tables.comment.read(Number(req.params.id));

    if (comment != null) {
      res.json(comment);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const comment = req.body;
  const userId = req.body.jwtUser.id;
  comment.user_id = userId;

  try {
    const insertId = await tables.comment.create(comment);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const comment = req.body;
  try {
    await tables.comment.update(comment);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.comment.delete(req.params.id);
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
