import { useState } from "react";
import "../../styles/panelAdmin/AdminRecipes.css";
import entree1 from "../../assets/images/entree1.jpg";
import entree2 from "../../assets/images/entree2.jpg";
import entree3 from "../../assets/images/entree3.jpg";
import plat1 from "../../assets/images/plat1.jpg";
import plat2 from "../../assets/images/plat2.jpg";
import plat3 from "../../assets/images/plat3.jpg";
import dessert1 from "../../assets/images/dessert1.jpg";
import dessert2 from "../../assets/images/dessert2.jpg";
import dessert3 from "../../assets/images/dessert3.jpg";

export default function AdminRecipe() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Tomate garnie", image: entree1 },
    { id: 2, title: "Dahl lentilles corail", image: plat1 },
    { id: 3, title: "Tiramisu", image: entree2 },
    { id: 4, title: "Tiramisu", image: entree3 },
    { id: 5, title: "Tiramisu", image: plat2 },
    { id: 6, title: "Tiramisu", image: plat3 },
    { id: 7, title: "Tiramisu", image: dessert2 },
    { id: 8, title: "Tiramisu", image: dessert3 },
    { id: 9, title: "Tiramisu", image: dessert1 },
    { id: 10, title: "Tiramisu", image: dessert1 },
  ]);

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
