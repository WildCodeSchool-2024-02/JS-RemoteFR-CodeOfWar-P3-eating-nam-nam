import axios from "axios";

const getUserRecipe = async (userId) => axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`, { params: { userId } })
    .then(response => response.data);

export default getUserRecipe;