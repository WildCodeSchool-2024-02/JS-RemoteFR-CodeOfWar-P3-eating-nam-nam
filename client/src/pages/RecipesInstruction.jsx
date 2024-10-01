import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import handleDeleteRecipe from "../services/handleDeleteRecipe";

import "../styles/recipesinstruction.css";
import photoProfil from "../assets/images/user_picture.png";
import difficulty from "../assets/images/difficulty.svg";
import star from "../assets/images/étoile.png";
import gantDeCuisson from "../assets/images/gant_de_cuisson.svg";
import four from "../assets/images/four.svg";
import smileyLangue from "../assets/images/smiley_langue.svg";
import heartRed from "../assets/images/heart-red.svg";
import Comment from "../components/Comment";

export default function RecipesInstruction() {
  const [recipeStep, setRecipeStep] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipe_step`)
      .then((response) => setRecipeStep(response.data))
      .catch((error) => console.error(error));
  };
  console.info(recipeStep);

  useEffect(() => {
    fetchData();
  }, []);

  const { recipe, comments: initialComments } = useLoaderData();
  const navigate = useNavigate();
  const [commentData, setCommentData] = useState("");
  const [comments, setComments] = useState(initialComments);

  console.info(comments);

  const stars = [1, 2, 3, 4, 5];

  const handleCommentChange = (event) => {
    setCommentData(event.currentTarget.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/comments`,
        {
          recipe_id: recipe.id,
          content: commentData,
        },
        { withCredentials: true }
      );
      setComments((prevData) => [...prevData, response.data]);
    } catch (err) {
      console.error(
        "Une erreur est survenue lors de la création d'un commentaire: ",
        err
      );
    }
  };

  return (
    <div className="card-recipe">
      <div>
        <article className="card-recipe-orange">
          <div className="Countain">
            <div className="Pseudo-Avatar">
              <img src={photoProfil} alt="profil de l'utilisateur" />
              <p>CookDiary_anais</p>
            </div>
            <div className="dishes">
              <img
                src={`${import.meta.env.VITE_API_URL}/${recipe.image_url}`}
                alt={`plat de ${recipe.title}`}
                className="imageRecipeInstruction"
              />
            </div>

            <section className="Boulettes-Ratings">
              <h2>{recipe.title}</h2>
              <div className="ratings">
                {stars.map((starId) => (
                  <img src={star} key={starId} alt="Star" />
                ))}
              </div>
            </section>

            <div className="Desciption-recipe">
              <p>{recipe.description}</p>
            </div>
          </div>

          <div className="Difficulty-Heart">
            <div className="Difficulty-bar">
              <img src={difficulty} alt="difficulté" />
              <p className="difficulty-name">{recipe.difficulty}</p>
            </div>
            <img src={heartRed} alt="coeur rouge" />
          </div>
          <button
            type="button"
            className="delete-recipe-btn"
            onClick={() => handleDeleteRecipe(recipe.id, navigate)}
          >
            Supprimer la recette
          </button>
        </article>

        <article className="card-recipe-green">
          <div className="Gant-Four">
            <div className="gant-de-cuisson">
              <img
                src={gantDeCuisson}
                alt="logo de gants pour le temps préparation"
              />
              <p>
                {recipe.preparation_time} minutes <br />
                Préparation
              </p>
            </div>
            <div className="four">
              <img src={four} alt="logo de four pour le temps de cuisson" />
              <p>
                {recipe.cooking_time} minutes <br />
                Cuisson
              </p>
            </div>
          </div>
        </article>

        <article className="Ingredients">
          <h2>Ingrédients</h2>
          <div className="Liste-Ingredients">
            {recipe?.ingredients?.length > 0 ? (
              recipe.ingredients.map((ingredient) => (
                <div key={ingredient.name}>
                  {parseInt(ingredient.quantity, 10)} {ingredient.unit}{" "}
                  {ingredient.name}
                </div>
              ))
            ) : (
              <p>Ingrédients non disponibles</p>
            )}
          </div>
        </article>

        <article className="Recette-green">
          <div className="Recette">
            <h2>Recette</h2>
            {recipeStep.length &&
              recipeStep.map((step) => (
                <div className="Etape-Global" key={step.id}>
                  <div className="Etape">
                    <h3>{step.number}</h3>
                    <p> {step.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </article>

        <article className="Smiley-Langue">
          <h3>Bon Appétit</h3>
          <img src={smileyLangue} alt="Smiley qui tire la langue" />
        </article>
        <article className="CommentSection">
          <h2>Commentaires</h2>
          <div className="CommentList">
            {comments.length > 0 ? (
              comments.map((commentary) => (
                <Comment key={commentary.id} commentary={commentary} />
              ))
            ) : (
              <p>Aucun commentaire pour cette recette.</p>
            )}
          </div>
          <form onSubmit={handleCommentSubmit} className="CommentForm">
            <textarea
              name="comment"
              value={commentData.comment}
              onChange={handleCommentChange}
              placeholder="Écrivez votre commentaire ici"
            />
            <button type="submit">Poster</button>
          </form>
        </article>
      </div>
    </div>
  );
}
