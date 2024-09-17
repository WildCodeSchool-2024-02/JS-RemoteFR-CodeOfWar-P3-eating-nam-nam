import "../../styles/userProfile/personalInfo.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { updateUserProfil } from "../../services/request";

export default function PersonalInfo({ userData, setUserData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUserProfil(userData.id, userData);
      setUserData(updatedUser);
      setNotification({
        type: "success",
        message: "Profil mis à jour avec succès !",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Échec de la mise à jour du profil.",
      });
    }
  };

  return (
    <div className="personal_info">
      <h2>MES INFOS PERSO</h2>
      <form onSubmit={handleSubmit}>
        <div className="user_info">
          <label htmlFor="civility">Civilité</label>
          <input
            id="civility"
            type="text"
            value={userData.civility}
            onChange={handleInputChange}
          />
        </div>

        <div className="user_info">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="user_info">
          <label htmlFor="fullname">Nom et prénom</label>
          <input
            id="fullname"
            type="text"
            value={userData.fullname}
            onChange={handleInputChange}
          />
        </div>

        <div className="user_info">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <label htmlFor="password">Mot de passe</label>
          <div className="password_field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={userData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="toggle_password_button"
              onClick={togglePassword}
            >
              {showPassword ? "Masquer" : "Afficher"}
            </button>
            <button type="button" className="modify_button">
              modifier
            </button>
          </div>
        </div>

        <button type="submit" className="submit_button">
          Enregistrer
        </button>
      </form>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

PersonalInfo.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
}.isRequired;
