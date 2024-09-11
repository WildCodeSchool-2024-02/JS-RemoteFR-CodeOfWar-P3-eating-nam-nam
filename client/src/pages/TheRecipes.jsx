import Carrousel from "../components/navbar/Carrousel";
import "../styles/therecipes.css";

import gazpachoTomate from "../assets/images/gazpacho_tomate.svg";
import foieGras from "../assets/images/foie_gras.svg";
import saladeDePate from "../assets/images/salade_de_pate.svg";
import bruschetta from "../assets/images/bruschetta.svg";
import carpaccioDeBoeuf from "../assets/images/carpaccio_de_boeuf.svg";
import saladeLyonnaise from "../assets/images/salade_lyonnaise.svg";
import soupePotimarron from "../assets/images/soupe_potimarron.svg";
import cheeseburger from "../assets/images/cheeseburger.svg";
import galetteComplete from "../assets/images/galette_complete.svg";
import makis from "../assets/images/makis.svg";
import pateBolognaise from "../assets/images/pate_bolognaise.svg";
import poissonHaricotsPuree from "../assets/images/poisson_haricots_puree.svg";
import porcAuCaramel from "../assets/images/porc_au_caramel.svg";
import pouletAuCurry from "../assets/images/poulet_au_curry.svg";
import pouletAuxOlives from "../assets/images/poulet_aux_olives.svg";
import pureeSteak from "../assets/images/puree_steak.svg";

const entreeData = [
  { name: "Gazpacho de tomate", image: gazpachoTomate },
  { name: "Foie gras", image: foieGras },
  { name: "Salade de pate", image: saladeDePate },
  { name: "Bruschetta", image: bruschetta },
  { name: "Carpaccio de boeuf", image: carpaccioDeBoeuf },
  { name: "Salade lyonnaise", image: saladeLyonnaise },
  { name: "Soupe potimarron", image: soupePotimarron },
];

const platData = [
  { name: "Cheeseburger", image: cheeseburger },
  { name: "Galette complete", image: galetteComplete },
  { name: "Makis", image: makis },
  { name: "Pate bolognaise", image: pateBolognaise },
  { name: "Poisson haricots puree", image: poissonHaricotsPuree },
  { name: "Porc au caramel", image: porcAuCaramel },
  { name: "Poulet au curry", image: pouletAuCurry },
  { name: "Poulet aux olives", image: pouletAuxOlives },
  { name: "Puree steak", image: pureeSteak },
];

function TheRecipes() {
  return (
    <div>
      <section>
        <h2>LES ENTREES</h2>
        <Carrousel items={entreeData} />
      </section>
      <section>
        <h2>LES PLATS</h2>
        <Carrousel items={platData} />
      </section>
      <section>
        <h2>LES DESSERTS</h2>
        {/* Ajouter d'autres sections si nécessaire */}
      </section>
    </div>
  );
}

export default TheRecipes;
