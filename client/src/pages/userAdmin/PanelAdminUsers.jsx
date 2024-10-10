import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../../styles/panelAdmin/AdminUsers.css";

export default function PanelAdminUsers() {
  const users = useLoaderData();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [visibleUsersCount, setVisibleUsersCount] = useState(5);

  const openModal = (id) => {
    setUserToDelete(id);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/user/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          setModalOpen(false);
          navigate("/admin-users", { replace: true });
        } else {
          console.error("Erreur lors de la suppression de l'utilisateur.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE:", error);
      });
  };

  const handleSeeMore = () => {
    const newCount = Math.min(visibleUsersCount + 5, users.length);
    setVisibleUsersCount(newCount);
  };

  return (
    <div className="users-AdminList">
      <h1 className="users-AdminTitle">Utilisateurs Admin</h1>
      <div className="users-AdminCards">
        {users && users.length !== 0 ? (
          users.slice(0, visibleUsersCount).map((user) => (
            <div className="users-AdminCard" key={user.id}>
              <p>
                <strong>Nom complet :</strong> {user.fullname}
              </p>
              <p>
                <strong>Pseudo :</strong> {user.username}
              </p>
              <button
                onClick={() => openModal(user.id)}
                className="delete-button"
                type="button"
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <p>Aucun utilisateur trouvé</p>
        )}
      </div>
      {visibleUsersCount < users.length && (
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
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <button
              className="modal-content-button-yes"
              type="button"
              onClick={() => handleDelete(userToDelete)}
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
