import { useState, useEffect } from "react";
import "../../styles/panelAdmin/AdminRecipes.css";

export default function AdminRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/recipes")
      .then((response) => response.json())
      .then((data) =>
        setRecipes(
          data.map((recipe) => ({
            ...recipe,
            image: `http://localhost:3310${recipe.image}`,
          }))
        )
      )
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-AdminList">
      <h1 className="recipe-AdminTitle">Recettes</h1>
      <div className="recipe-AdminCards">
        {recipes.map((recipe) => (
          <div className="recipe-AdminCard" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-AdminImage"
            />
            <div className="recipe-details">
              <p>{recipe.title}</p>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="delete-button"
                type="button"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" type="button">
        Retour
      </button>
    </div>
  );
}
