import PropTypes from "prop-types";
import "../../styles/user/recipe.css";

export default function Recipe({ title, image }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <p className="recipe-title">{title}</p>
    </div>
  );
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
