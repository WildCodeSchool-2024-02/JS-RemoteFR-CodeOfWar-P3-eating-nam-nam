import axios from "axios";

const recipeLoader = async ({ params }) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/recipes/${params.id}`
  );
  return response.data;
};

export default recipeLoader;
