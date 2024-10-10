import axios from "axios";

const searchRecipes = async (searchTerm) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/recipes`,
      {
        params: { q: searchTerm },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la recherche des recettes:", error);
    throw error;
  }
};

export default searchRecipes;
