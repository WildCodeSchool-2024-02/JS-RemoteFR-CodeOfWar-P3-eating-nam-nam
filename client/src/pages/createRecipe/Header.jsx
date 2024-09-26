import photo from "../../assets/images/photo.svg";
import "../../styles/create/header.css";

export default function Header() {
  return (
    <header>
      <section className="left">
        <h1>Créer une nouvelle recette</h1>
        <p>Partagez votre délicieuse recette !</p>
        <div>
          <input type="text" placeholder="Titre de la recette..." />
          <textarea
            name="description"
            id=""
            placeholder="Description de la recette..."
          />
        </div>
      </section>
      <section className="right">
        <section className="top">
          <select className="difficulty-select">
            <option value="">Choisir la difficulté</option>
            <option value="facile">Facile</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
          </select>
          <button type="submit">Enregister</button>
        </section>
        <label htmlFor="input-file">
          <img src={photo} alt="" />
          <span>Importer une photo</span>
        </label>
        <input type="file" id="input-file" />
      </section>
    </header>
  );
}
