import "../../styles/panelAdmin/dashboard.css";

const sections = [
  { title: "Utilisateurs" },
  { title: "Recettes" },
  { title: "Commentaires" },
  { title: "Newsletters" },
];

export default function Admin() {
  return (
    <div className="dashboard-container">
      <h1>Modération Miam</h1>
      <div className="card-flex">
        {sections.map((section) => (
          <div key={section.title} className="card-Admin">
            <p>{section.title}</p>
          </div>
        ))}
      </div>
      <button className="Return-button" type="button">
        Retour
      </button>
    </div>
  );
}
