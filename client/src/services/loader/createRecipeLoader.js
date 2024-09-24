import axios from "axios";

export default async () => {
  try {
    const [difficultiesResponse, ingredientsResponse] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/api/difficulty`),
      axios.get(`${import.meta.env.VITE_API_URL}/api/ingredients`),
    ]);

    console.info(ingredientsResponse);

    return {
      difficulties: difficultiesResponse.data,
      ingredients: ingredientsResponse.data,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
