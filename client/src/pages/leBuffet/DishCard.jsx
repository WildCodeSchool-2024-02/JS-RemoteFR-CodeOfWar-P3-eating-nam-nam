import PropTypes from "prop-types";

export default function DishCard({ dish }) {
  console.info("Plat affiché dans DishCard:", dish);

  const dishWords = dish.description.split(" ");
  const maxWord = 40;

  return (
    <div className="dish-card">
      <img
        src={dish.image_url || "default-image.jpg"}
        alt={dish.name || "Plat"}
        className="dish-image"
      />
      <h3>{dish.name || "Nom indisponible"}</h3>
      <p>
        {dishWords.length > maxWord
          ? `${dishWords.slice(0, maxWord).join(" ")}...`
          : dish.description}
      </p>
      <button className="Dish-button" type="button">
        En cuisine!
      </button>
    </div>
  );
}

DishCard.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string,
  }).isRequired,
};
