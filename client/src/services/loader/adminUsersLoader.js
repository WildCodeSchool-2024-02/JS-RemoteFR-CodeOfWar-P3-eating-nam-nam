import axios from "axios";

const mapUsers = (user, userApi) =>
  user.map((users) => ({
    ...users,
    image_url: `${userApi}/${user.user_id}`,
  }));

const adminUsersLoader = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user`,
      {
        withCredentials: true,
      }
    );

    const user = response.data.result;
    const userApi = import.meta.env.VITE_API_URL;

    return mapUsers(user, userApi);
  } catch (error) {
    if (error.response) {
      console.error(
        "Erreur lors du chargement des users:",
        error.response.data
      );
    } else {
      console.error("Erreur réseau ou autre:", error.message);
    }
    throw error;
  }
};
export default adminUsersLoader;
