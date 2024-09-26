import axios from "axios";

const fetchDifficulties = async () =>
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/difficulty`)
    .then((response) => response.data);

export default fetchDifficulties;
