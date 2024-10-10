import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../styles/panelAdmin/AdminRecipes.css";

export default function AdminRecipe() {
  const loadedRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(loadedRecipes);

  const handleDelete = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );

    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/recipes/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          console.error("Erreur lors de la suppression de la recette.");
          setRecipes((prevRecipes) => [
            ...prevRecipes,
            loadedRecipes.find((r) => r.id === id),
          ]);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE:", error);
        setRecipes((prevRecipes) => [
          ...prevRecipes,
          loadedRecipes.find((r) => r.id === id),
        ]);
      });
  };

  return (
    <div className="recipe-AdminList">
      <h1 className="recipe-AdminTitle">Recettes</h1>
      <div className="recipe-AdminCards">
        {recipes.map((recipe) => (
          <div className="recipe-AdminCard" key={recipe.id}>
            <img
              src={recipe.image_url}
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
    </div>
  );
}
