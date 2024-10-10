import { useLocation, Link } from "react-router-dom";
import "../styles/buffetSelect.css";

export default function BuffetSelect() {
  const location = useLocation();
  const { selectedRecipes } = location.state || { selectedRecipes: [] };

  return (
    <div className="Buffet-select">
      <div className="Buffet-select-header">
        <h1>LE BUFFET</h1>
        <p>Mon menu du jour</p>
      </div>
      {selectedRecipes.length === 0 ? (
        <p>Aucune recette sélectionnée</p>
      ) : (
        selectedRecipes.map((recipe) => (
          <Link to={`/recipes-instruction/${recipe.id}`} key={recipe.id}>
            <section>
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
          </Link>
        ))
      )}
    </div>
  );
}
