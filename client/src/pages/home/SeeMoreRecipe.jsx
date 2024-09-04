import saladeGrecque from "../../assets/images/salade_grecque.svg";
import saladeCésarCarre from "../../assets/images/salade_césar2.png";

export default function SeeMoreRecipe() {
  return (
    <div className="See_more">
      <h3>Voir aussi...</h3>
      <article>
        <h4>IDEE RECETTE</h4>
        <h5>Salade césar</h5>
        <img src={saladeCésarCarre} alt="Salade césar" />
        <p>La recette incontournable de la salade césar.</p>
      </article>
      <article>
        <h4>IDEE RECETTE</h4>
        <h5>Salade grecque</h5>
        <img src={saladeGrecque} alt="Salade grecque" />
        <p>La recette incontournable de la salade grecque.</p>
      </article>
    </div>
  );
}
