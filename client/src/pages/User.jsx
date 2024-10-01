import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import RecipeSection from "./user/RecipeSection";
import userPicture from "../assets/images/user_picture.png";
import "../styles/user.css";

export default function User({
  username,
  description,
  latestRecipes = [],
  favoriteRecipes = [],
}) {
  const { user } = useAuth();
  const isAdmin = user && user.role === "admin";

  return (
    <div className="user-page">
      <header className="profile-header">
        <div className="profile-info">
          <Link to="/user-profil">
            <img src={userPicture} alt="Profile" className="profile-image" />
          </Link>
          <div className="profile-details">
            <h1>{username}</h1>
            <p className="profile-description">{description}</p>
          </div>
        </div>
      </header>

      <RecipeSection title="Dernières recettes" recipes={latestRecipes} />
      <RecipeSection title="Mes recettes favorites" recipes={favoriteRecipes} />

      <div className="action-buttons">
        <Link to="/create-recipe">
          <button type="button" className="add-recipe-button">
            Ajouter une nouvelle recette
          </button>
        </Link>
        <button type="button" className="edit-recipe-button">
          Modifier une recette
        </button>

        {isAdmin && (
          <Link to="/panel-admin">
            <button type="button" className="admin-panel-button">
              Panel Admin
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

User.propTypes = {
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
