import Reception from "./home/Reception";
import RecipeCard from "./home/RecipeCard";
import SeeMoreRecipe from "./home/SeeMoreRecipe";
import Buffet from "./home/Buffet";
import Advices from "./home/Advices";

import tarteAuxPommes from "../assets/images/tarte_aux_pommes.png";
import saladeGrecque from "../assets/images/salade_grecque.svg";
import saladeCésarCarre from "../assets/images/salade_césar2.png";
import oeuf from "../assets/images/oeuf.png";
import star from "../assets/images/étoile.png";
import apostrophe from "../assets/images/Apostrophe.png";

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

  const advices = [
    {
      id: 1,
      imageEgg: oeuf,
      alt1: "oeuf",
      imageApp: apostrophe,
      alt2: "apostrophe",
      name: "Elsa",
      description:
        "J'ai testé cette recette de lasagnes végétariennes hier soir, et c'était un pur délice! Les couches d'aubergines et de courgettes grillées se marient parfaitement avec la sauce tomate maison, riche et parfumée. Le mélange de fromages fondus ajoute une onctuosité irrésistible. Le tout est simple à préparer et a été un véritable succès auprès de toute la famille. Une recette que je referai sans hésiter!",
      imageStar: star,
      alt3: star,
    },
    {
      id: 2,
      imageEgg: oeuf,
      alt1: "oeuf",
      imageApp: apostrophe,
      alt2: "apostrophe",
      name: "Lucas",
      description:
        "J'ai essayé cette recette de curry de pois chiches, et c'était tout simplement fabuleux! Les épices étaient parfaitement équilibrées, avec une légère touche de cumin qui rehaussait le tout. Les pois chiches étaient tendres, et la sauce crémeuse à base de lait de coco apportait une douceur exotique. Très facile à réaliser, et une option parfaite pour un repas rapide et savoureux. Définitivement une recette à garder!",
      imageStar: star,
      alt3: star,
    },
    {
      id: 3,
      imageEgg: oeuf,
      alt1: "oeuf",
      imageApp: apostrophe,
      alt2: "apostrophe",
      name: "Marie",
      description:
        "J'ai préparé cette salade de quinoa et d'avocat pour le déjeuner, et c'était incroyablement frais et savoureux! Le croquant des légumes frais, mélangé avec la douceur de l'avocat et l'acidité d'une vinaigrette citronnée, était tout simplement parfait. En plus, c'est sain et super rapide à faire. Idéal pour un repas léger mais nourrissant. Je recommande vivement!",
      imageStar: star,
      alt3: star,
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
      <Advices advices={advices} />
    </>
  );
}
