import PropTypes from "prop-types";
import "../styles/user.css";

function Recipe({ title, image }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <p className="recipe-title">{title}</p>
    </div>
  );
}

function RecipeSection({ title, recipes = [] }) {
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
            <Recipe key={recipe.id} title={recipe.title} image={recipe.image} />
          ))
        ) : (
          <p>Aucune recette disponible</p>
        )}
      </div>
    </div>
  );
}

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

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

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
