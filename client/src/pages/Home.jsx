import saladeCésar from "../assets/images/salade_césar.svg";
import pommeDeTerreFarcies from "../assets/images/pomme_de_terre_farcies.svg";
import risotto from "../assets/images/risotto.svg";
import omelette from "../assets/images/omelette_garnies.svg";
import dahl from "../assets/images/dahl_de_lentille_curry.svg";
import spaghettisBolognaise from "../assets/images/spaghettis_bolognaise.svg";
import saladeGrecque from "../assets/images/salade_grecque.svg";
import tarteAuxPommes from "../assets/images/tarte_aux_pommes.png";
import saladeCeasarCarre from "../assets/images/salade_césar2.png";

export default function Home() {
  return (
    <>
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
              cuisinier débutant ou un chef expérimenté, notre site est conçu
              pour vous inspirer et vous guider à travers une multitude de
              recettes délicieuses, faciles à suivre et adaptées à tous les
              goûts.
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
      <div className="Recipe-card">
        <section className="Left">
          <article>
            <h2>La tarte aux pommes</h2>
            <h3>descrition</h3>
            <p>
              La tarte aux pommes est un dessert classique, apprécié pour sa
              simplicité et ses saveurs réconfortantes. Elle se compose d'une
              pâte brisée croustillante garnie de fines tranches de pommes,
              souvent agrémentées de sucre, de cannelle et parfois de beurre
              pour une touche de gourmandise supplémentaire. Ce dessert se sert
              aussi bien chaud que froid, accompagné d'une boule de glace à la
              vanille ou d'une cuillerée de crème fraîche pour un moment de
              douceur parfait.
            </p>
            <img src={tarteAuxPommes} alt="Tarte aux pommes" />
          </article>
        </section>
        <section className="right">
          <h3>Voir aussi...</h3>
          <article>
            <h4>IDEE RECETTE</h4>
            <h5>Salade césar</h5>
            <img src={saladeCeasarCarre} alt="Salade césar" />
            <p>La recette incontournable de la salade césar.</p>
          </article>
          <article>
            <h4>IDEE RECETTE</h4>
            <h5>Salade grecque</h5>
            <img src={saladeGrecque} alt="Salade grecque" />
            <p>La recette incontournable de la salade grecque.</p>
          </article>
        </section>
      </div>
    </>
  );
}
