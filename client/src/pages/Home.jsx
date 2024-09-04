import plat1 from "../assets/images/salade_césar.svg";
import plat2 from "../assets/images/pomme_de_terre_farcies.svg";
import plat3 from "../assets/images/risotto.svg";
import plat4 from "../assets/images/omelette_garnies.svg";
import plat5 from "../assets/images/dahl_de_lentille_curry.svg";
import plat6 from "../assets/images/spaghettis_bolognaise.svg";
import dessert1 from "../assets/images/tarte_aux_pommes.png";

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
          <img src={plat1} alt="Salade Céasar" />
          <img src={plat2} alt="Pomme de terre farcies" />
          <img src={plat3} alt="Colin et son Risotto" />
          <img src={plat4} alt="Omelette garnies" />
          <img src={plat5} alt="Dahl de lentilles au curry" />
          <img src={plat6} alt="Spaghettis bolognaise" />
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
            <img src={dessert1} alt="Tarte aux pommes" />
          </article>
        </section>
        <section className="right">
          <h3>Voir aussi...</h3>
          <article>
            <h4>IDEE RECETTE</h4>
            <h5>Salade césar</h5>
            <p>La recette incontournable de la salade césar.</p>
          </article>
          <article>
            <h4>IDEE RECETTE</h4>
            <h5>Salade grecque</h5>
            <p>La recette incontournable de la salade grecque.</p>
          </article>
        </section>
      </div>
    </>
  );
}
