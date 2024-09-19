import axios from "axios";

export const getUserProfil = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user/profile/`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil utilisateur:",
      error
    );
    throw error;
  }
};

export const updateUserProfil = async (userData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/user/profile/`,
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du profil utilisateur:",
      error
    );
    throw error;
  }
};
