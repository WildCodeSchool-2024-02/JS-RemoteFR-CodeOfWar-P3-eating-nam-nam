import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    civility: "0",
    username: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData
      );
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Erreur lors de l'inscription : ", err);
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1>Inscription</h1>
      <div>
        <section>
          <label htmlFor="civility">Civilité</label>
          <select
            name="civility"
            id="civility"
            value={formData.civility}
            onChange={handleChange}
          >
            <option value="0">Monsieur</option>
            <option value="1">Madame</option>
            <option value="2">Autre</option>
          </select>
        </section>
        <section>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Votre nom d'utilisateur..."
            value={formData.username}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Votre pseudo..."
            value={formData.pseudo}
            onChange={handleChange}
          />
        </section>
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
        <section>
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="Votre mot de passe..."
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </section>
      </div>
      <button type="submit">Je crée mon compte</button>
    </form>
  );
}
