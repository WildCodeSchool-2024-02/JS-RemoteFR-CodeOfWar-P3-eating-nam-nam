import axios from "axios";

export default async () => {
  try {
    const [difficultiesResponse, ingredientsResponse, categoryResponse] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/api/difficulty`),
      axios.get(`${import.meta.env.VITE_API_URL}/api/ingredients`),
      axios.get(`${import.meta.env.VITE_API_URL}/api/category`),
    ]);

    return {
      difficulties: difficultiesResponse.data,
      ingredients: ingredientsResponse.data,
      categories: categoryResponse.data
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
