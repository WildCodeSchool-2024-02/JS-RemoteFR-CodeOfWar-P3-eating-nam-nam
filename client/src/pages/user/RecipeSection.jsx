import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "../../styles/user/recipeSection.css";

export default function RecipeSection({ title, recipes = [] }) {
  return (
    <div className="recipe-section">
      <div className="section-header">
        <h2 className="title">{title}</h2>
        <button type="button" className="view-all-button">
          Voir tout ❯
        </button>
      </div>
      <div className="recipe-list">
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe key={recipe.id} id={recipe.recipe_id} title={recipe.recipe_title} image={recipe.recipe_image_url} />
          ))
        ) : (
          <p>Aucune recette disponible</p>
        )}
      </div>
    </div>
  );
}

RecipeSection.propTypes = {
  title: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
