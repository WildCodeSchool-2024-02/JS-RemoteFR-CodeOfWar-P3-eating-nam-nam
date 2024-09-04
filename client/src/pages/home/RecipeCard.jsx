import tarteAuxPommes from "../../assets/images/tarte_aux_pommes.png";

export default function RecipeCard() {
  return (
    <div className="Recipe-card">
      <h2>La tarte aux pommes</h2>
      <h3>descrition</h3>
      <div className="card">
        <p>
          La tarte aux pommes est un dessert classique, apprécié pour sa
          simplicité et ses saveurs réconfortantes. Elle se compose d'une pâte
          brisée croustillante garnie de fines tranches de pommes, souvent
          agrémentées de sucre, de cannelle et parfois de beurre pour une touche
          de gourmandise supplémentaire. Ce dessert se sert aussi bien chaud que
          froid, accompagné d'une boule de glace à la vanille ou d'une cuillerée
          de crème fraîche pour un moment de douceur parfait.
        </p>
        <img src={tarteAuxPommes} alt="Tarte aux pommes" />
      </div>
    </div>
  );
}
