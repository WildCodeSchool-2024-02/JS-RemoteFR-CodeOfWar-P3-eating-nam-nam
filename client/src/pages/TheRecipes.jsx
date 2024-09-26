import { useLoaderData } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import "../styles/therecipes.css";

function TheRecipes() {
  const { entreeResponse, platResponse, dessertResponse } = useLoaderData();

  return (
    <div>
      <section>
        <h2>LES ENTREES</h2>
        <Carrousel category={entreeResponse} />
      </section>
      <section>
        <h2>LES PLATS</h2>
        <Carrousel category={platResponse} />
      </section>
      <section>
        <h2>LES DESSERTS</h2>
        <Carrousel category={dessertResponse} />
      </section>
    </div>
  );
}

export default TheRecipes;
