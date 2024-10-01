import axios from "axios";

const mapRecipes = (recipes, imageApi) =>
  recipes.map((recipe) => ({
    ...recipe,
    image_url: `${imageApi}/${recipe.image_url}`,
  }));

const adminRecipesLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/recipes`,
      {
        withCredentials: true,
      }
    );

    const recipes = response.data;
    const imageApi = import.meta.env.VITE_API_URL;

    return mapRecipes(recipes, imageApi);
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

export default adminRecipesLoader;
