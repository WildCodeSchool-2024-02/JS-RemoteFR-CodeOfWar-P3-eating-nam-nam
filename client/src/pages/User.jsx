import PropTypes from "prop-types";
import RecipeSection from "./user/RecipeSection";
import "../styles/user.css";

export default function User({
  profileImage,
  username,
  description,
  latestRecipes = [],
  favoriteRecipes = [],
}) {
  return (
    <div className="user-page">
      <header className="profile-header">
        <div className="profile-info">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h1>{username}</h1>
            <p className="profile-description">{description}</p>
          </div>
        </div>
      </header>

      <RecipeSection
        title="Dernières recettes publiées"
        recipes={latestRecipes}
      />
      <RecipeSection title="Mes recettes favorites" recipes={favoriteRecipes} />

      <div className="action-buttons">
        <button type="button" className="add-recipe-button">
          Ajouter une nouvelle recette
        </button>
        <button type="button" className="edit-recipe-button">
          Modifier une recette
        </button>
      </div>
    </div>
  );
}

User.propTypes = {
  profileImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  latestRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  favoriteRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
