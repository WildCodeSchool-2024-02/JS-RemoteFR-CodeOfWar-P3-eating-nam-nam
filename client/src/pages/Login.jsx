import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {

  const handleSumbit = async (event) => {
    event.preventDefault();
    const email =  event.target.elements.namedItem("email").value;
    const password = event.target.elements.namedItem("pass").value;

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
    console.info("Réponse du serveur: ", response);

    // METTRE UNE REPONSE POUR L'UTILISATEUR
    // Si jamais le login fail, il faut l'indiquer à l'utilisateur par la balise error
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
        <p>...</p>
      </div>
      <button type="submit">Je me connecte</button>
      <Link to="/connexion?forgot=true">J’ai oublié mon mot de passe...</Link>
    </form>
  );
}
