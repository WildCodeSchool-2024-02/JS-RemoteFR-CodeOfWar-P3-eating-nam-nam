import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData,
        { withCredentials: true }
      );
      setError("");
      navigate("/");
    } catch (err) {
      console.error("Erreur lors de la connexion : ", err);
      setError("La connexion a échoué. Vérifiez vos identifiants");
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1>Connexion</h1>
      <div>
        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email..."
            value={formData.email}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Votre mot de passe..."
            value={formData.password}
            onChange={handleChange}
          />
        </section>
        {error && <p className="error">{error}</p>}
      </div>
      <button type="submit">Je me connecte</button>
      <Link to="/connexion?forgot=true">J'ai oublié mon mot de passe...</Link>
    </form>
  );
}
