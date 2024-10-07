import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/user/recipe.css";

export default function Recipe({ id, title, image }) {
  return (
    <Link to={`/recipes-instruction/${id}`} className="recipe-card">
      <img src={`${import.meta.env.VITE_API_URL}/${image}`} alt={title} className="recipe-image" />
      <p className="recipe-title">{title}</p>
    </Link>
  );
}

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
