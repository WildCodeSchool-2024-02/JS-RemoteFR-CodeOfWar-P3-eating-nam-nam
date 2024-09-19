import PropTypes from "prop-types";

export default function DishCard({ dish }) {
  const dishWords = dish.description.split(" ");
  const maxWord = 40;

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <h3>{dish.name}</h3>
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
