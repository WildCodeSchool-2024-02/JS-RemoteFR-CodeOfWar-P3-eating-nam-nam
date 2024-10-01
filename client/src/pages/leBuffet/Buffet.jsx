import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import DishCard from "./DishCard";
import "../../styles/leBuffet/Buffet.css";
import "../../styles/leBuffet/DishCard.css";
import EntreeBanner from "../../assets/images/Entrée-buffet.png";
import PlatBanner from "../../assets/images/Plat-buffet.png";
import DessertBanner from "../../assets/images/Dessert-buffet.png";

export default function LeBuffet() {
  const { entrees, plats, desserts } = useLoaderData();

  const [selectedRecipes, setSelectedRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("selectedRecipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  const toggleSelectRecipe = (recipe) => {
    const isSelected = selectedRecipes.find(
      (recipeItem) => recipeItem.id === recipe.id
    );
    let newSelection;

    if (isSelected) {
      newSelection = selectedRecipes.filter(
        (recipeItem) => recipeItem.id !== recipe.id
      );
    } else {
      newSelection = [...selectedRecipes, recipe];
    }

    setSelectedRecipes(newSelection);
    localStorage.setItem("selectedRecipes", JSON.stringify(newSelection));
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/buffet-select", { state: { selectedRecipes } });
  };

  return (
    <div className="le-buffet-container">
      <h1>Le Buffet</h1>
      <h2 className="Buffet-quote">
        " Explorez, savourez, et découvrez de nouvelles saveurs chaque jour. "
      </h2>
      <p>
        Notre buffet est conçu pour éveiller vos papilles et vous offrir des
        plats délicieux qui sortent de l'ordinaire. Que vous soyez en quête
        d'inspiration ou simplement d'une pause gourmande, laissez-vous
        surprendre par notre sélection variée et savoureuse. Chaque plat est une
        invitation à explorer de nouvelles saveurs et à redécouvrir le plaisir
        de bien manger.
      </p>

      <section className="dish-section">
        <h2>Entrées</h2>
        <img src={EntreeBanner} alt="Entrées" className="dish-banner" />
        <div className="dish-row">
          {entrees.map((entree) => (
            <DishCard
              key={entree.id}
              dish={entree}
              isSelected={
                !!selectedRecipes.find(
                  (recipeItem) => recipeItem.id === entree.id
                )
              }
              onToggleSelect={() => toggleSelectRecipe(entree)}
            />
          ))}
        </div>
      </section>

      <section className="dish-section">
        <h2>Plats</h2>
        <img src={PlatBanner} alt="Plats" className="dish-banner" />
        <div className="dish-row">
          {plats.map((plat) => (
            <DishCard
              key={plat.id}
              dish={plat}
              isSelected={
                !!selectedRecipes.find(
                  (recipeItem) => recipeItem.id === plat.id
                )
              }
              onToggleSelect={() => toggleSelectRecipe(plat)}
            />
          ))}
        </div>
      </section>

      <section className="dish-section">
        <h2>Desserts</h2>
        <img src={DessertBanner} alt="Desserts" className="dish-banner" />
        <div className="dish-row">
          {desserts.map((dessert) => (
            <DishCard
              key={dessert.id}
              dish={dessert}
              isSelected={
                !!selectedRecipes.find(
                  (recipeItem) => recipeItem.id === dessert.id
                )
              }
              onToggleSelect={() => toggleSelectRecipe(dessert)}
            />
          ))}
        </div>
      </section>
      <button onClick={handleNavigate} type="button">
        Voir mes recettes sélectionnées
      </button>
    </div>
  );
}
