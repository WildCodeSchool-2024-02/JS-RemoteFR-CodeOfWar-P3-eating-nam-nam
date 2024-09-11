import { Link } from "react-router-dom";

import "../styles/footer.css";
import messages from "../assets/images/messages.svg";
import androidImage from "../assets/images/download-Android.png";
import iosImage from "../assets/images/download-IOS.png";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import Logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer>
      <section className="Download">
        <div className="Download-links">
          <img src={androidImage} alt="link to download app with Android" />
          <img src={iosImage} alt="link to download app with Ios" />
        </div>

        <div className="social-icons">
          <Link to="https://www.wildcodeschool.com/fr-fr/">
            <img src={facebook} alt="Icone de l'application facebook" />
          </Link>
          <Link to="https://www.wildcodeschool.com/fr-fr/">
            <img src={twitter} alt="Icone de l'application twitter" />
          </Link>
          <Link to="https://www.wildcodeschool.com/fr-fr/">
            <img src={instagram} alt="Icone de l'application instagram" />
          </Link>
        </div>
      </section>
      <section className="Newsletter">
        <img src={Logo} alt="Logo du site Miam" />
        <section>
          <h2>Abonnez-vous à notre newsletter</h2>
          <p>Adresse e-mail</p>
          <input type="email" placeholder="Entrez votre adresse e-mail" />
          <button type="button">Je m'abonne</button>
        </section>
      </section>
      <div className="links">
        <Link to="/contact">
          <img src={messages} alt="Message icon" />
          Nous contacter
        </Link>
        <p>© Miam 2024. Tous droits réservés</p>
      </div>
    </footer>
  );
}
