import "../../styles/userProfile/personalInfo.css";
import { useState } from "react";

export default function PersonalInfo() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="personal_info">
      <h2>MES INFOS PERSO</h2>
      <form>
        {["Nom d'utilisateur", "Civilité", "Prenom", "Nom", "E-mail"].map(
          (label) => (
            <div key={label} className="user_info">
              <label htmlFor={label.toLowerCase()}>{label}</label>
              <input
                id={label.toLowerCase()}
                type={label === "E-mail" ? "email" : "text"}
              />
            </div>
          )
        )}

        <div className="">
          <label htmlFor="password">Mot de passe</label>
          <div className="password_field">
            <input id="password" type={showPassword ? "text" : "password"} />
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
    </div>
  );
}
