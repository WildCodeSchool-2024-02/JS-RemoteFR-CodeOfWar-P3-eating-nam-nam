import { useState } from "react";
import "../../styles/panelAdmin/AdminComments.css";

export default function AdminComments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Délicieux et facile à préparer !",
      recipeTitle: "Tomate garnie",
    },
    {
      id: 2,
      text: "Un plat savoureux et réconfortant.",
      recipeTitle: "Dahl lentilles corail",
    },
    { id: 3, text: "Un vrai régal, j'adore !", recipeTitle: "Tiramisu" },
    { id: 4, text: "Excellent ! Je le recommande.", recipeTitle: "Tiramisu" },
    {
      id: 5,
      text: "Pas mal, mais un peu trop sucré.",
      recipeTitle: "Tiramisu",
    },
    { id: 6, text: "Mon dessert préféré !", recipeTitle: "Tiramisu" },
    {
      id: 7,
      text: "Parfait pour les occasions spéciales.",
      recipeTitle: "Tiramisu",
    },
    {
      id: 8,
      text: "Une belle présentation et un goût incroyable.",
      recipeTitle: "Tiramisu",
    },
    { id: 9, text: "J'en reprendrai bien une part !", recipeTitle: "Tiramisu" },
    {
      id: 10,
      text: "Très bon, mais j'ai préféré la version originale.",
      recipeTitle: "Tiramisu",
    },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-AdminList">
      <h1 className="comments-AdminTitle">Commentaires des Recettes</h1>
      <div className="comments-AdminCards">
        {comments.map((comment) => (
          <div className="comments-AdminCard" key={comment.id}>
            <div className="comment-details">
              <p>
                <strong>Recette :</strong> {comment.recipeTitle}
              </p>
              <p>
                <strong>Commentaire :</strong> {comment.text}
              </p>
              <button
                onClick={() => handleDelete(comment.id)}
                className="delete-button"
                type="button"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" type="button">
        Retour
      </button>
    </div>
  );
}
