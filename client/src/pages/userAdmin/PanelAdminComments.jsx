import { useState } from "react";
import "../../styles/panelAdmin/AdminComments.css";

export default function AdminComments() {
  const allComments = [
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

    {
      id: 11,
      text: "Incroyable, à refaire !",
      recipeTitle: "Dahl lentilles corail",
    },
    { id: 12, text: "Simple et efficace !", recipeTitle: "Tomate garnie" },
    { id: 13, text: "Un délice !", recipeTitle: "Tiramisu" },
    { id: 14, text: "Pas assez de saveur.", recipeTitle: "Tiramisu" },
    { id: 15, text: "Une recette que je referai.", recipeTitle: "Tiramisu" },
  ];

  const [comments, setComments] = useState(allComments.slice(0, 5));
  const [isModalOpen, setModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [expandedCommentId, setExpandedCommentId] = useState(null);

  const [visibleCommentsCount, setVisibleCommentsCount] = useState(5);

  const openModal = (id) => {
    setCommentToDelete(id);
    setModalOpen(true);
  };

  const handleDelete = () => {
    setComments(comments.filter((comment) => comment.id !== commentToDelete));
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCommentToDelete(null);
  };

  const toggleComment = (id) => {
    setExpandedCommentId(expandedCommentId === id ? null : id);
  };

  const handleSeeMore = () => {
    const newCount = Math.min(visibleCommentsCount + 5, allComments.length);
    setVisibleCommentsCount(newCount);
  };

  return (
    <div className="comments-AdminList">
      <h1 className="comments-AdminTitle">Commentaires des Recettes</h1>
      <div className="comments-AdminCards">
        {allComments.slice(0, visibleCommentsCount).map((comment) => (
          <button
            className="comments-AdminCard"
            key={comment.id}
            onClick={() => toggleComment(comment.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                toggleComment(comment.id);
              }
            }}
            type="button"
            aria-expanded={expandedCommentId === comment.id}
          >
            <div className="comment-details">
              <p>
                <strong>Recette :</strong> {comment.recipeTitle}
              </p>
              <p className="comment-text">
                <strong>Commentaire :</strong>{" "}
                {expandedCommentId === comment.id
                  ? comment.text
                  : comment.text.slice(0, 50) +
                    (comment.text.length > 50 ? "..." : "")}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(comment.id);
                }}
                className="delete-button"
                type="button"
              >
                ❌
              </button>
            </div>
          </button>
        ))}
      </div>

      {visibleCommentsCount < allComments.length && (
        <button
          className="see-more-button"
          type="button"
          onClick={handleSeeMore}
        >
          Voir plus
        </button>
      )}

      <button className="back-button" type="button">
        Retour
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir supprimer ce commentaire ?</p>
            <button
              className="modal-content-button-yes"
              type="button"
              onClick={handleDelete}
            >
              Oui
            </button>
            <button
              className="modal-content-button-no"
              type="button"
              onClick={closeModal}
            >
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
