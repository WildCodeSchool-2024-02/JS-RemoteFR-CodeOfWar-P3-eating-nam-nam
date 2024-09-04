import Reception from "./home/Reception";
import RecipeCard from "./home/RecipeCard";
import SeeMoreRecipe from "./home/SeeMoreRecipe";
import Buffet from "./home/Buffet";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Reception />
      <div className="RecipeCard-SeeMore">
        <RecipeCard />
        <SeeMoreRecipe />
      </div>
      <Buffet />
    </>
  );
}
