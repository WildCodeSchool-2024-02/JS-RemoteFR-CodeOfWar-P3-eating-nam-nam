// import { Link } from "react-router-dom";
import Carrousel from "../components/navbar/Carrousel";
import "../styles/therecipes.css";

import gazpachoTomate from "../assets/images/gazpacho_tomate.svg";
import foieGras from "../assets/images/foie_gras.svg";
import saladeDePate from "../assets/images/salade_de_pate.svg";
import bruschetta from "../assets/images/bruschetta.svg";
import carpaccioDeBoeuf from "../assets/images/carpaccio_de_boeuf.svg";
import saladeLyonnaise from "../assets/images/salade_lyonnaise.svg";
import soupePotimarron from "../assets/images/soupe_potimarron.svg";

const entreeData = [
  { name: "Gazpacho de tomate", image: gazpachoTomate },
  { name: "Foie gras", image: foieGras },
  { name: "Salade de pate", image: saladeDePate },
  { name: "Bruschetta", image: bruschetta },
  { name: "Carpaccio de boeuf", image: carpaccioDeBoeuf },
  { name: "Salade lyonnaise", image: saladeLyonnaise },
  { name: "Soupe potimarron", image: soupePotimarron },
];

function TheRecipes() {
  return (
    <div>
      <section className="Entree">
        <h2>LES ENTREES</h2>
        <Carrousel items={entreeData} />
      </section>
      <section>
        <h2>LES PLATS</h2>
        {/* Ajouter d'autres sections si nécessaire */}
      </section>
      <section>
        <h2>LES DESSERTS</h2>
        {/* Ajouter d'autres sections si nécessaire */}
      </section>
    </div>
  );
}

export default TheRecipes;
