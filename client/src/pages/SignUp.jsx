import "../styles/Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();

    // CHANGER LES event.target POUR AVOIR UNE SOLUTION PLUS OPTIMISER
    // (ON L'A FAIT DANS LE LOGIN)

    navigate("/login");
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("pass").value;
    const confirmPassword =
      event.target.elements.namedItem("confirmPass").value;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { username, password, confirmPassword }
      );
      console.info("Réponse du server: ", response);
    } catch (err) {
      console.error("Erreur lors de l'inscription : ", err);
    }
  };
  // LA REQUÊTE VERS POST /register
  // (ON L'A FAIT DANS LE LOGIN)

  return (
    <form className="auth" onSubmit={handleSumbit}>
      <h1>Inscription</h1>
      <div>
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
        <section>
          <label htmlFor="password">Confirmer le mot de passe</label>
          <input
            type="password"
            name=""
            id="confirm-password"
            placeholder="Votre mot de passe..."
          />
        </section>
      </div>
      <button type="submit">Je créer mon compte</button>
    </form>
  );
}
