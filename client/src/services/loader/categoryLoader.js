import axios from "axios";

const CategoryLoader = async () => {
  const [entreeResponse, platResponse, dessertResponse] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/api/category/1?limit=5`),
    axios.get(`${import.meta.env.VITE_API_URL}/api/category/2?limit=2`),
    axios.get(`${import.meta.env.VITE_API_URL}/api/category/3`),
  ]);

  console.info("ENTRE RESPONSE: ", entreeResponse.data);

  return {
    entrees: entreeResponse.data,
    plats: platResponse.data,
    desserts: dessertResponse.data,
  };
};
export default CategoryLoader;
