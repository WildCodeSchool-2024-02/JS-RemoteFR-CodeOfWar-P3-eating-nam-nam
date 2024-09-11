import PropTypes from "prop-types";

export default function RecipeCard({ recipe }) {
  return (
    <div className="Recipe-card">
      <h2>{recipe.name}</h2>
      <h3>descrition</h3>
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
