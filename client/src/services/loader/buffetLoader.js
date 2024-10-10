import axios from "axios";

const randomBuffet = (array) =>
  array.sort(() => Math.random() - 0.5).slice(0, 6);

const mapRecipes = (recipes, imageApi) =>
  recipes.map((recipe) => ({
    ...recipe,
    image_url: `${imageApi}/${recipe.image_url}`,
  }));

const buffetLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/recipes`,
      {
        withCredentials: true,
      }
    );

    const recipes = response.data;
    const imageApi = import.meta.env.VITE_API_URL;

    return {
      entrees: mapRecipes(
        randomBuffet(recipes.filter((recipe) => recipe.category_id === 1)),
        imageApi
      ),
      plats: mapRecipes(
        randomBuffet(recipes.filter((recipe) => recipe.category_id === 2)),
        imageApi
      ),
      desserts: mapRecipes(
        randomBuffet(recipes.filter((recipe) => recipe.category_id === 3)),
        imageApi
      ),
    };
  } catch (error) {
    if (error.response) {
      console.error(
        "Erreur lors du chargement des recettes:",
        error.response.data
      );
    } else {
      console.error("Erreur réseau ou autre:", error.message);
    }
    throw error;
  }
};

export default buffetLoader;
