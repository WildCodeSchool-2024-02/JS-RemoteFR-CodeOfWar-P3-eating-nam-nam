import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/create/ingredients.css";

export default function Ingredients({
  selectedIngredients,
  updateIngredients,
}) {
  const { ingredients: allIngredients } = useLoaderData();
  const [filteredIngredients, setFilteredIngredients] =
    useState(allIngredients);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = allIngredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIngredients(results);
  }, [searchTerm, allIngredients]);

  const handleIngredientToggle = (ingredient) => {
    const updatedIngredients = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter((i) => i !== ingredient)
      : [...selectedIngredients, ingredient];
    updateIngredients(updatedIngredients);
  };

  return (
    <div className="ingredients-section">
      <h2>Ingrédients</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un ingrédient"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ingredient-search"
        />
      </div>
      <div className="ingredients-container">
        <div className="ingredients-list">
          {filteredIngredients.map((ingredient) => (
            <label key={ingredient.id} className="ingredient-item">
              <input
                type="checkbox"
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => handleIngredientToggle(ingredient)}
              />
              <span className="ingredient-name">{ingredient.name}</span>
            </label>
          ))}
        </div>
      </div>
      {selectedIngredients.length > 0 ? (
        <div className="selected-ingredients">
          <h3>Ingrédients sélectionnés</h3>
          <ul>
            {selectedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

Ingredients.propTypes = {
  selectedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateIngredients: PropTypes.func.isRequired,
};
