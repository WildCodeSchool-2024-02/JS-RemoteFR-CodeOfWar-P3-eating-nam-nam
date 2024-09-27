import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import photo from "../../assets/images/photo.svg";
import "../../styles/create/header.css";

export default function Header({ recipeData, updateRecipeData }) {
  const { difficulties } = useLoaderData();
  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      updateRecipeData("photo", e.target.files[0]);
    }
  };

  return (
    <header>
      <section className="left">
        <h1>Créer une nouvelle recette</h1>
        <p>Partagez votre délicieuse recette !</p>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Titre de la recette..."
            value={recipeData.title}
            onChange={(e) => updateRecipeData("title", e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Description de la recette..."
            value={recipeData.description}
            onChange={(e) => updateRecipeData("description", e.target.value)}
          />
        </div>
      </section>
      <section className="right">
        <section className="top">
          <select
            className="difficulty-select"
            value={recipeData.difficulty}
            onChange={(e) => updateRecipeData("difficulty", e.target.value)}
          >
            <option value="">Choisir la difficulté</option>
            {difficulties
              ? difficulties
                  .sort((a, b) => a.id - b.id)
                  .map((difficulty) => (
                    <option value={difficulty.id} key={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))
              : null}
          </select>
          <select
            className="difficulty-select"
            value={recipeData.category}
            onChange={(e) => updateRecipeData("category", e.target.value)}
          >
            <option value="">Choisir la categorie</option>
            {difficulties
              ? difficulties
                  .sort((a, b) => a.id - b.id)
                  .map((difficulty) => (
                    <option value={difficulty.id} key={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))
              : null}
          </select>
          <button type="submit">Enregister</button>
        </section>
        <label htmlFor="input-file">
          {recipeData.photo ? (
            <img
              src={URL.createObjectURL(recipeData.photo)}
              alt="Recipe"
              className="preview"
            />
          ) : (
            <>
              <img src={photo} alt="" />
              <span>Importer une photo</span>
            </>
          )}
        </label>
        <input type="file" id="input-file" onChange={handlePhotoChange} />
      </section>
    </header>
  );
}

Header.propTypes = {
  recipeData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    photo: PropTypes.oneOfType([
      PropTypes.instanceOf(File),
      PropTypes.oneOf([null]),
    ]),
  }).isRequired,
  updateRecipeData: PropTypes.func.isRequired,
};
