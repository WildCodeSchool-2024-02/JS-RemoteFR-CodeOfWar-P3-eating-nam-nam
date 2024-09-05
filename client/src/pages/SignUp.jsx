import "../styles/Auth.css";

export default function SignUp() {
  const handleSumbit = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const confirmPassword = event.target[2].value;
    console.info(
      `Username: ${username}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`
    );
    // SignUp...
  };

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
