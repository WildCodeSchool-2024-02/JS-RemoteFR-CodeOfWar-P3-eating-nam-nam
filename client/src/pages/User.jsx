import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import RecipeSection from "./user/RecipeSection";
import { getUserFavorite } from "../services/fetchFavorite";
import "../styles/user.css";
import getUserRecipe from "../services/fetchRecipe";

export default function User({ username, description }) {
  const { user } = useAuth();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const isAdmin = user && user.role === "admin";

  useEffect(() => {
    if (user) {
      Promise.all([getUserFavorite(user.id), getUserRecipe(user.id)]).then(
        (response) => {
          setFavoriteRecipes(response[0]);
          console.info(response);
          setLatestRecipes(response[1]);
        }
      );
    }
  }, [user]);

  return (
    <div className="user-page">
      <header className="profile-header">
        <div className="profile-info">
          <Link to="/user-profil">
            {user ? (
              <>
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.fullname}`}
                  alt={user.fullname}
                  className="user-avatar"
                />
                <h2>{user.fullname}</h2>
              </>
            ) : null}
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
};
