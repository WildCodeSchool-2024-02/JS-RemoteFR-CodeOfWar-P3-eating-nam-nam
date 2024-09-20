import { useState } from "react";
import "../../styles/panelAdmin/AdminRecipes.css";

export default function AdminRecipe() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Lorem 1", image: "image1.jpg" },
    { id: 2, title: "Lorem 2", image: "image2.jpg" },
    { id: 3, title: "Lorem 3", image: "image3.jpg" },
  ]);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-AdminList">
      <h1>Recettes</h1>
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
      <button className="back-button" type="button">
        Retour
      </button>
    </div>
  );
}
