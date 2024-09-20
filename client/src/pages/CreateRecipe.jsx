import { useState } from "react";
import axios from "axios";
import Header from "./createRecipe/Header";
import Ingredients from "./createRecipe/Ingredients";
import Step from "./createRecipe/Step";
import "../styles/create/create.css";

export default function CreateRecipe() {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    photo: null,
    ingredients: [],
    steps: [
      { id: "1", content: "Préchauffez le four à 180°C" },
      { id: "2", content: "Mélangez les ingrédients dans un bol" },
      { id: "3", content: "Versez la pâte dans le moule" },
    ],
    difficulty: "0",
  });

  const updateRecipeData = (field, value) => {
    setRecipeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.info(
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recipes/`,
        recipeData,
        { withCredentials: true }
      )
    );
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <Header recipeData={recipeData} updateRecipeData={updateRecipeData} />
      <Ingredients
        selectedIngredients={recipeData.ingredients}
        updateIngredients={(newIngredients) =>
          updateRecipeData("ingredients", newIngredients)
        }
      />
      <Step
        steps={recipeData.steps}
        updateSteps={(newSteps) => updateRecipeData("steps", newSteps)}
      />
    </form>
  );
}
