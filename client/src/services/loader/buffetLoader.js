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
    console.info("Recettes reçues du backend:", recipes);

    const entrees = recipes.filter((recipe) => recipe.category_id === 1);
    const plats = recipes.filter((recipe) => recipe.category_id === 2);
    const desserts = recipes.filter((recipe) => recipe.category_id === 3);

    console.info("Entrées:", entrees);
    console.info("Plats:", plats);
    console.info("Desserts:", desserts);

    return {
      entrees: entrees.map((recipe) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`;
        console.info(`Image URL pour entrée ${recipe.title}:`, imageUrl);
        return {
          ...recipe,
          image_url: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
        };
      }),
      plats: plats.map((recipe) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`;
        console.info(`Image URL pour plat ${recipe.title}:`, imageUrl);
        return {
          ...recipe,
          image_url: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
        };
      }),
      desserts: desserts.map((recipe) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`;
        console.info(`Image URL pour dessert ${recipe.title}:`, imageUrl);
        return {
          ...recipe,
          image_url: `${import.meta.env.VITE_API_URL}/uploads/${recipe.image_url}`,
        };
      }),
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
