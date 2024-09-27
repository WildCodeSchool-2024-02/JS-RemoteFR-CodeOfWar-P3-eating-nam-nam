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

const readByRecipe = async (req, res, next) => {
  try {
    const comments = await tables.comment.readByRecipeId(Number(req.params.id));

    if (comments != null) {
      res.json(comments);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const comment = req.body;
  console.info(req.body);

  const userId = req.user.id;
  comment.user_id = userId;

  try {
    const insertId = await tables.comment.create({
      recipe_id: comment.recipe_id,
      content: comment.content.comment,
      user_id: userId,
    });
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }

  return null;
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
    const commentId = parseInt(req.params.id, 10);
    const comment = await tables.comment.read(commentId);

    if (parseInt(req.user.id, 10) !== parseInt(comment.user_id, 10)) {
      res.sendStatus(401);
    } else {
      await tables.comment.delete(commentId);
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readByRecipe,
  add,
  edit,
  destroy,
};
