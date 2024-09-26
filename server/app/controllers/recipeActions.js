const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    let recipes;

    if (searchTerm) {
      recipes = await tables.recipe.search(searchTerm);
    } else {
      recipes = await tables.recipe.readAll();
    }
    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const recipes = await tables.recipe.read(req.params.id);

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const readRandom = async (req, res, next) => {
  const { limit } = req.query;
  try {
    const recipeRandom = await tables.recipe.readRandom(limit || 1);
    res.json(recipeRandom);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const recipe = { ...req.body, id: req.params.id };

  try {
    await tables.recipe.update(recipe);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { title, description, steps, difficulty, categorie, jwtUser } =
      req.body;
    const recipeId = await tables.recipe.create({
      userId: jwtUser.id,
      difficultyId: parseInt(difficulty, 10),
      categorieId: parseInt(categorie, 10),
      title,
      description,
      cookingTime: 10,
      preparationTime: 10,
    });
    steps.forEach((step) => {
      tables.recipeStep.create(recipeId, { number: step.id, ...step });
    });
    console.info("Recipe id: ", recipeId);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.recipe.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readRandom,
};
