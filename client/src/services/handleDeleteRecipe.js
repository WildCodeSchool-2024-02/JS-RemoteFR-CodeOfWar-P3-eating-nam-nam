import axios from "axios";

const handleDeleteRecipe = async (recipeId, navigate) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}`,
      { withCredentials: true }
    );
    console.info("Suppression réussie:", response.data);
    navigate("/");
  } catch (error) {
    if (error.response) {
      console.error(
        "Erreur lors de la suppression de la recette:",
        error.response.data
      );
    }
  }
};

export default handleDeleteRecipe;
