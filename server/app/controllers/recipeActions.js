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


    const { title, description, steps, difficulty, category, filename } =
      req.body;
    const { id } = req.user;
    const recipeId = await tables.recipe.create({
      userId: id,
      difficultyId: parseInt(difficulty, 10),
      categoryId: parseInt(category, 10),
      image_url: filename,
      title,
      description,
      cookingTime: 10,
      preparationTime: 10,
    });
    (await JSON.parse(steps)).forEach((step) => {
      tables.recipeStep.create(recipeId, {
        number: step.id,
        description: step.content,
      });
    });
    console.info("Recipe id: ", recipeId);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const userId = req.user.id;
    const userRole = req.user.role;

    const recipe = await tables.recipe.read(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }

    console.info(`Recipe owner ID: ${recipe.user_id}`);

    if (
      parseInt(recipe.user_id, 10) !== parseInt(userId, 10) &&
      userRole !== "admin"
    ) {
      return res.status(403).json({
        message: "Vous n'êtes pas autorisé à supprimer cette recette.",
      });
    }

    await tables.recipe.delete(recipeId);

    return res.sendStatus(204);
  } catch (err) {
    return next(err);
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
