import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/home/recipeCard.css";
import { Link } from "react-router-dom";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/random`)
      .then((response) => setRecipe(response.data[0]))
      .catch((error) => console.error(error));
  };
  console.info(recipe);
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
        <Link to={`/recipes-instruction/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.title} />
        </Link>
      </div>
    </div>
  );
}
