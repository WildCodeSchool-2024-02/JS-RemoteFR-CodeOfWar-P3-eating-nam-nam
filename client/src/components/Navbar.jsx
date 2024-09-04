import Logo from "../assets/images/logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <section>
          <a href="/passer-en-cuisine">Passer en cuisine</a>
          <a href="/recettes">Recettes</a>
        </section>
        <img src={Logo} alt="Miam" />
        <section>
          <a href="/inscription">Inscription</a>
          <button type="button">Connexion</button>
        </section>
      </nav>
      <hr />
    </>
  );
}
