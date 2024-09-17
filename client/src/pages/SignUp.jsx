import "../styles/Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();

    // CHANGER LES event.target POUR AVOIR UNE SOLUTION PLUS OPTIMISER
    // (ON L'A FAIT DANS LE LOGIN)

    const username = event.target.elements.namedItem("username").value;
    const pseudo = event.target.elements.namedItem("pseudo").value;
    const email = event.target.elements.namedItem("email").value;
    const password = event.target.elements.namedItem("password").value;
    const confirmPassword =
      event.target.elements.namedItem("confirmPassword").value;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { username, password, pseudo, email, confirmPassword }
      );
      console.info("Réponse du server: ", response);

      if (response.status === 200) {
        navigate("/login");
      }
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
            name="username"
            id="username"
            placeholder="Votre nom d’utilisateur..."
          />
        </section>
        <section>
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Votre pseudo..."
          />
        </section>
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
            name="password"
            id="password"
            placeholder="Votre mot de passe..."
          />
        </section>
        <section>
          <label htmlFor="password">Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="Votre mot de passe..."
          />
        </section>
      </div>
      <button type="submit">Je créer mon compte</button>
    </form>
  );
}
