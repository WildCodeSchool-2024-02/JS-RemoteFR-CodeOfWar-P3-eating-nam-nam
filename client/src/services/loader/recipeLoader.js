import axios from "axios";

const recipeLoader = async ({ params }) => {
  const [recipeResponse, commentsResponse] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/api/recipes/${params.id}`),
    axios.get(
      `${import.meta.env.VITE_API_URL}/api/comments/recipes/${params.id}`
    ),
  ]);

  return {
    recipe: recipeResponse.data,
    comments: commentsResponse.data,
  };
};

export default recipeLoader;
