import Carrousel from "../components/Carrousel";
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

import bananeCaramelisee from "../assets/images/banane_caramelisee.svg";
import barreGlaceChocolat from "../assets/images/barre_glace_chocolat.svg";
import compoteDePomme from "../assets/images/compote_de_pomme.svg";
import crepeAbricot from "../assets/images/crepe_abricot.svg";
import fraisesChantilly from "../assets/images/fraises_chantilly.svg";
import gaufreSauceChocolat from "../assets/images/gaufre_sauce_chocolat.svg";
import nougat from "../assets/images/nougat.svg";
import pancakesSiropErable from "../assets/images/pancakes_sirop_erable.svg";
import saladeDeFruits from "../assets/images/salade_de_fruits.svg";

const entreeData = [
  { id: 1, name: "Gazpacho de tomate", image: gazpachoTomate },
  { id: 2, name: "Foie gras", image: foieGras },
  { id: 3, name: "Salade de pate", image: saladeDePate },
  { id: 4, name: "Bruschetta", image: bruschetta },
  { name: "Carpaccio de boeuf", image: carpaccioDeBoeuf },
  { name: "Salade lyonnaise", image: saladeLyonnaise },
  { name: "Soupe potimarron", image: soupePotimarron },
];

const platData = [
  { name: "Cheeseburger", image: cheeseburger },
  { name: "Galette complète", image: galetteComplete },
  { name: "Makis", image: makis },
  { name: "Boulettes bolognaise", image: pateBolognaise },
  { name: "Poisson haricots purée", image: poissonHaricotsPuree },
  { name: "Porc au caramel", image: porcAuCaramel },
  { name: "Poulet au curry", image: pouletAuCurry },
  { name: "Poulet aux olives", image: pouletAuxOlives },
  { name: "Puree steak", image: pureeSteak },
];

const dessertData = [
  { name: "Banane caramelisée", image: bananeCaramelisee },
  { name: "Compote de pomme", image: compoteDePomme },
  { name: "Crepe Abricot", image: crepeAbricot },
  { name: "Fraises chantilly", image: fraisesChantilly },
  { name: "Gaufre sauce chocolat", image: gaufreSauceChocolat },
  { name: "Nougat", image: nougat },
  { name: "Pancakes sirop d'érable", image: pancakesSiropErable },
  { name: "Salade de fruits", image: saladeDeFruits },
  { name: "Barre glacé chocolat", image: barreGlaceChocolat },
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
        <Carrousel items={dessertData} />
      </section>
    </div>
  );
}

export default TheRecipes;
