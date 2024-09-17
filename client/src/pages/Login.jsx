import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSumbit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.namedItem("email").value;
    const password = event.target.elements.namedItem("pass").value;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      setError("");
      navigate("/")
    } catch (err) {
      console.error("Erreur lors de la connexion : ", err);
      setError("La connexion a échoué. Vérifiez vos identifiants");
    }
  };

  return (
    <form className="auth" onSubmit={handleSumbit}>
      <h1>Connexion</h1>
      <div>
        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email..."
          />
        </section>
        <section>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="pass"
            id="password"
            placeholder="Votre mot de passe..."
          />
        </section>
        <p className="error">{error}</p>
      </div>
      <button type="submit">Je me connecte</button>
      <Link to="/connexion?forgot=true">J’ai oublié mon mot de passe...</Link>
    </form>
  );
}
