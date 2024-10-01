import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../../styles/panelAdmin/AdminComments.css";

export default function AdminComments() {
  const comments = useLoaderData();
  const revalidator = useRevalidator();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [expandedCommentId, setExpandedCommentId] = useState(null);
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(5);

  const openModal = (id) => {
    setCommentToDelete(id);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/comments/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 204) {
          revalidator.revalidate();
        } else {
          console.error("Erreur lors de la suppression du commentaire.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE:", error);
      });
    setModalOpen(false);
    setCommentToDelete(null);
  };

  const toggleComment = (id) => {
    setExpandedCommentId(expandedCommentId === id ? null : id);
  };

  const handleSeeMore = () => {
    const newCount = Math.min(visibleCommentsCount + 5, comments.length);
    setVisibleCommentsCount(newCount);
  };

  return (
    <div className="comments-AdminList">
      <h1 className="comments-AdminTitle">Commentaires des Recettes</h1>
      <div className="comments-AdminCards">
        {comments && comments.length !== 0 ? (
          comments.slice(0, visibleCommentsCount).map((comment) => (
            <button
              className="comments-AdminCard"
              key={comment.id}
              onClick={() =>
                navigate(`/recipes-instruction/${comment.recipe_id}`)
              }
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
                  <strong>Recette :</strong> {comment.recipe_title}
                </p>
                <p className="comment-text">
                  <strong>Commentaire :</strong>{" "}
                  {expandedCommentId === comment.id
                    ? comment.content
                    : comment.content.slice(0, 50) +
                      (comment.content.length > 50 ? "..." : "")}
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
          ))
        ) : (
          <p>Aucun commentaire trouvé</p>
        )}
      </div>

      {visibleCommentsCount < comments.length && (
        <button
          className="see-more-button"
          type="button"
          onClick={handleSeeMore}
        >
          Voir plus
        </button>
      )}

      <button
        className="back-button"
        type="button"
        onClick={() => navigate("/panel-admin")}
      >
        Retour
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Êtes-vous sûr de vouloir supprimer ce commentaire ?</p>
            <button
              className="modal-content-button-yes"
              type="button"
              onClick={() => handleDelete(commentToDelete)}
            >
              Oui
            </button>
            <button
              className="modal-content-button-no"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
