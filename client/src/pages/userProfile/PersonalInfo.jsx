export default function PersonalInfo() {
  return (
    <div className="personal-info">
      <h2>MES INFOS PERSO</h2>
      <form>
        {["PRENOM", "NOM", "EMAIL"].map((label) => (
          <div key={label} className="form-info">
            <label>{label}</label>
            <input type={label === "EMAIL" ? "email" : "text"} />
          </div>
        ))}
      </form>
    </div>
  );
}
