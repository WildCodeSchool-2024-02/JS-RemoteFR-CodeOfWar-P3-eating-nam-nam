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
        {["PRENOM", "NOM", "EMAIL"].map((label) => (
          <div key={label} className="user_info">
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input
              id={label.toLowerCase()}
              type={label === "EMAIL" ? "email" : "text"}
            />
          </div>
        ))}

        <div className="">
          <label htmlFor="password">MOT DE PASSE</label>
          <div className="password_field">
            <input id="password" type={showPassword ? "text" : "password"} />
            <button
              type="button"
              className="toggle_password_btn"
              onClick={togglePassword}
            >
              {showPassword ? "Masquer" : "Afficher"}
            </button>
            <button type="button" className="modify_button">
              modifier
            </button>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
