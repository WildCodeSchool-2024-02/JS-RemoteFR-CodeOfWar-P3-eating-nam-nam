import axios from "axios";

const buffetLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/recipes`,
      {
        withCredentials: true,
      }
    );

    const recipes = response.data;

    const entrees = recipes.filter((recipe) => recipe.category_id === 1);
    const plats = recipes.filter((recipe) => recipe.category_id === 2);
    const desserts = recipes.filter((recipe) => recipe.category_id === 3);

    return {
      entrees: entrees.map((recipe) => ({
        ...recipe,
        image: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
      })),
      plats: plats.map((recipe) => ({
        ...recipe,
        image: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
      })),
      desserts: desserts.map((recipe) => ({
        ...recipe,
        image: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
      })),
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
