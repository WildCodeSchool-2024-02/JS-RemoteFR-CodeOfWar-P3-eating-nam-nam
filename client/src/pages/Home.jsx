import Reception from "./home/Reception";
import RecipeCard from "./home/RecipeCard";
import SeeMoreRecipe from "./home/SeeMoreRecipe";
import Buffet from "./home/Buffet";
import Advice from "./home/Advice";

import tarteAuxPommes from "../assets/images/tarte_aux_pommes.png";
import saladeGrecque from "../assets/images/salade_grecque.svg";
import saladeCésarCarre from "../assets/images/salade_césar2.png";

import "../styles/home.css";

export default function Home() {
  const littleRecipes = [
    {
      id: 1,
      name: "Salade césar",
      image: saladeCésarCarre,
      description: "La recette incontournable de la salade césar.",
    },
    {
      id: 2,
      name: "Salade grecque",
      image: saladeGrecque,
      description: "La recette incontournable de la salade grecque.",
    },
  ];

  const recipe = {
    name: "La tarte aux pommes",
    description: `
          La tarte aux pommes est un dessert classique, apprécié pour sa
          simplicité et ses saveurs réconfortantes. Elle se compose d'une pâte
          brisée croustillante garnie de fines tranches de pommes, souvent
          agrémentées de sucre, de cannelle et parfois de beurre pour une touche
          de gourmandise supplémentaire. Ce dessert se sert aussi bien chaud que
          froid, accompagné d'une boule de glace à la vanille ou d'une cuillerée
          de crème fraîche pour un moment de douceur parfait.
          `,
    image: tarteAuxPommes,
  };

  return (
    <>
      <Reception />
      <div className="RecipeCard-SeeMore">
        <RecipeCard recipe={recipe} />
        <SeeMoreRecipe littleRecipes={littleRecipes} />
      </div>
      <Buffet />
      <Advice />
    </>
  );
}
