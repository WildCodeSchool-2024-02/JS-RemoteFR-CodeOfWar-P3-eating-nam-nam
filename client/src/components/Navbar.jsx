import Logo from "../assets/images/logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <section>
          <a href="/#">Passer en cuisine</a>
          <a href="/#">Recettes</a>
        </section>
        <img src={Logo} alt="Miam" />
        <section>
          <a href="/#">Inscription</a>
          <button type="button">Connexion</button>
        </section>
      </nav>
      <hr />
    </>
  );
}
