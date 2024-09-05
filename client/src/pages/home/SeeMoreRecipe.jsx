import PropTypes from "prop-types";

export default function SeeMoreRecipe({ littleRecipe }) {
  return (
    <div className="See_more">
      <h3>Voir aussi...</h3>
      {littleRecipe.map((littleRecipes) => (
        <article key={littleRecipes.id}>
          <h4>IDEE RECETTE</h4>
          <h5>{littleRecipes.name}</h5>
          <img src={littleRecipes.image} alt={littleRecipes.name} />
          <p>{littleRecipes.description}</p>
        </article>
      ))}
    </div>
  );
}

SeeMoreRecipe.propTypes = {
  littleRecipe: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
