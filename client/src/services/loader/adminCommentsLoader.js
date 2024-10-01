import axios from "axios";

const mapComments = (comments, commentApi) =>
  comments.map((comment) => ({
    ...comment,
    image_url: `${commentApi}/${comment.comment_id}`,
  }));

const adminCommentsLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/comments`,
      {
        withCredentials: true,
      }
    );

    const comments = response.data;
    const commentApi = import.meta.env.VITE_API_URL;

    return mapComments(comments, commentApi);
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

export default adminCommentsLoader;
