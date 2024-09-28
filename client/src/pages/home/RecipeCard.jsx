import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/home/recipeCard.css";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/random`)
      .then((response) => setRecipe(response.data[0]))
      .catch((error) => console.error(error));
  };
  console.info(recipe);
  console.info(
    `${import.meta.env.VITE_API_URL}/public/upload/${recipe.image_url}`
  );
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
        <div className="dishes3">
          <img
            src={`${import.meta.env.VITE_API_URL}/${recipe.image_url}`}
            alt={recipe.title}
            className="imageRecipeCard"
          />
        </div>
      </div>
    </div>
  );
}
