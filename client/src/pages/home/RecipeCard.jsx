import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/home/recipeCard.css";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/11`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Recipe-card">
      <h2>{recipe.title}</h2>
      <section>
        <h3>Description</h3>
        <div />
      </section>
      <div className="card">
        <p>{recipe.description}</p>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
}
