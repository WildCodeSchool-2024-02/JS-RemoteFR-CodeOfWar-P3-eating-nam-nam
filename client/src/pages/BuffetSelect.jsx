import { useLocation } from "react-router-dom";
import "../styles/buffetSelect.css";

export default function BuffetSelect() {
  const location = useLocation();
  const { selectedRecipes } = location.state || { selectedRecipes: [] };

  return (
    <div className="Buffet-select">
      <div>
        <h1>LE BUFFET</h1>
      </div>
      <p>Mon menu du jour</p>
      {selectedRecipes.length === 0 ? (
        <p>Aucune recette selectionnée</p>
      ) : (
        selectedRecipes.map((recipe) => (
          <section key={recipe.id}>
            <div className="buffet-img-dishes">
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="imageBuffetSelect"
              />
              <div>
                <h2>{recipe.title}</h2>
              </div>
              <p>{recipe.description}</p>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
