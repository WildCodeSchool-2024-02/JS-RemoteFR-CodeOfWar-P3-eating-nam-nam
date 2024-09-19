import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav>
        <section>
          <Link to="/passer-en-cuisine">Passer en cuisine</Link>
          <Link to="/recipes">Recettes</Link>
        </section>
        <Link to="/">
          <img src={Logo} alt="Miam" />
        </Link>
        <MenuBurger />
        <section>
          <Link to="/register">Inscription</Link>
          <button onClick={handleLogin} type="button">
            Connexion
          </button>
        </section>
      </nav>
      <hr />
    </>
  );
}
