import { Link } from "react-router-dom";
import "../../styles/panelAdmin/dashboard.css";

const sections = [
  { title: "Utilisateurs" },
  { title: "Recettes", path: "/admin-recipes" },
  { title: "Commentaires" },
  { title: "Newsletters" },
];

export default function PanelAdmin() {
  return (
    <div className="dashboard-container">
      <h1>Modération Miam</h1>
      <div className="card-flex">
        {sections.map((section) => (
          <Link key={section.title} to={section.path} className="card-Admin">
            <p>{section.title}</p>
          </Link>
        ))}
      </div>
      <button className="Return-button" type="button">
        Retour
      </button>
    </div>
  );
}
