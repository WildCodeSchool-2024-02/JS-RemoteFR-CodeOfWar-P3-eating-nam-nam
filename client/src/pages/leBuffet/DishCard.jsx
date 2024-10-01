import PropTypes from "prop-types";

export default function DishCard({ dish, isSelected, onToggleSelect }) {
  const dishWords = dish.description.split(" ");
  const maxWord = 40;

  return (
    <div className="dish-card">
      <img
        src={dish.image_url || "default-image.jpg"}
        alt={dish.title || "Plat"}
        className="dish-image"
      />
      <h3>{dish.title || "Nom indisponible"}</h3>
      <p>
        {dishWords.length > maxWord
          ? `${dishWords.slice(0, maxWord).join(" ")}...`
          : dish.description}
      </p>
      <button
        className={`select-button ${isSelected ? "selected" : ""}`}
        onClick={onToggleSelect}
        type="button"
      >
        {isSelected ? "Désélectionner" : "Sélectionner"}
      </button>
    </div>
  );
}

DishCard.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggleSelect: PropTypes.func.isRequired,
};
