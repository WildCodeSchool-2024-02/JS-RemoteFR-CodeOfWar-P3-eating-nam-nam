import axios from "axios";

export const addFavorite = async (userId, recipeId) =>
  axios
    .post(
      `${import.meta.env.VITE_API_URL}/api/favorite`,
      { userId, recipeId },
      { withCredentials: true }
    )
    .then((response) => response.data);

export const deleteFavorite = async (userId, recipeId) =>
  axios
    .delete(
      `${import.meta.env.VITE_API_URL}/api/favorite/${userId}/${recipeId}`,
      { withCredentials: true }
    )
    .then((response) => response.data);

export const getFavorite = async (userId, recipeId) =>
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/favorite`, {
      params: { userId, recipeId },
      withCredentials: true,
    })
    .then((response) => response.data);
