import { Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const handleSumbit = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.info(`Username: ${username}\nPassword: ${password}`);
    // Auth...
  };
  return (
    <form className="auth" onSubmit={handleSumbit}>
      <h1>Connexion</h1>
      <section>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          name=""
          id="username"
          placeholder="Votre nom d’utilisateur..."
        />
      </section>
      <section>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Votre mot de passe..."
        />
      </section>
      <button type="submit">Je me connecte</button>
      <Link to="/connexion?forgot=true">J’ai oublié mon mot de passe...</Link>
    </form>
  );
}
