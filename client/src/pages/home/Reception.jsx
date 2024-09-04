import saladeCésar from "../../assets/images/salade_césar.svg";
import pommeDeTerreFarcies from "../../assets/images/pomme_de_terre_farcies.svg";
import risotto from "../../assets/images/risotto.svg";
import omelette from "../../assets/images/omelette_garnies.svg";
import dahl from "../../assets/images/dahl_de_lentille_curry.svg";
import spaghettisBolognaise from "../../assets/images/spaghettis_bolognaise.svg";

export default function Reception() {
  return (
    <div className="reception">
      <section className="left">
        <h1>Selectionne, innove et collectionne tes meilleures recettes !</h1>
        <div className="search_box">
          <input type="text" placeholder="Votre recettes..." />
        </div>
        <article className="welcome">
          <p>
            Bienvenue sur Miam ! Votre destination ultime pour découvrir et
            partager des recettes gourmandes et variées ! Que vous soyez un
            cuisinier débutant ou un chef expérimenté, notre site est conçu pour
            vous inspirer et vous guider à travers une multitude de recettes
            délicieuses, faciles à suivre et adaptées à tous les goûts.
          </p>
        </article>
      </section>
      <section className="right">
        <img src={saladeCésar} alt="Salade Céasar" />
        <img src={pommeDeTerreFarcies} alt="Pomme de terre farcies" />
        <img src={risotto} alt="Colin et son Risotto" />
        <img src={omelette} alt="Omelette garnies" />
        <img src={dahl} alt="Dahl de lentilles au curry" />
        <img src={spaghettisBolognaise} alt="Spaghettis bolognaise" />
      </section>
    </div>
  );
}
