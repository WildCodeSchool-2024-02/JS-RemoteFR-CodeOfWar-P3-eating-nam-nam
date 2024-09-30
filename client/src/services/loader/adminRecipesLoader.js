import axios from "axios";

const adminRecipesLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/recipes`,
      {
        withCredentials: true,
      }
    );

    return response.data.map((recipe) => ({
      ...recipe,
      image: `${import.meta.env.VITE_API_URL}${recipe.image}`,
    }));
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
