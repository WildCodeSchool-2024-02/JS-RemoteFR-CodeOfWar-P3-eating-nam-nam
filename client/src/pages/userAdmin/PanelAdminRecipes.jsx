import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/panelAdmin/AdminRecipes.css";

export default function AdminRecipe() {
  const recipes = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3310/api/recipes/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin-recipes", { replace: true });
        } else {
          console.error("Erreur lors de la suppression de la recette.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE:", error);
      });
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
    </div>
  );
}
