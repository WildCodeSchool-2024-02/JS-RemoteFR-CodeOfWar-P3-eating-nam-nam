import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <nav>
        <section>
          {user ? <Link to="/create-recipe">Créer une recette</Link> : null}
          <Link to="/recipes">Recettes</Link>
        </section>
        <Link to="/">
          <img src={Logo} alt="Miam" />
        </Link>
        <MenuBurger />
        <section>
          {user ? (
            <>
              <button
                onClick={handleLogout}
                type="button"
                className="logout-button"
              >
                Déconnexion
              </button>
              <Link to="/user">
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.fullname}`}
                  alt={user.fullname}
                  className="user-avatar"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/register">Inscription</Link>
              <button onClick={handleLogin} type="button">
                Connexion
              </button>
            </>
          )}
        </section>
      </nav>
      <hr />
    </>
  );
}
