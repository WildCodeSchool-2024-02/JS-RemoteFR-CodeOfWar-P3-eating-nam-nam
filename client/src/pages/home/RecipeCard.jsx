import PropTypes from "prop-types";
import "../../styles/home/recipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <div className="Recipe-card">
      <h2>{recipe.name}</h2>
      <section>
        <h3>Description</h3>
        <div />
      </section>
      <div className="card">
        <p>{recipe.description}</p>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
