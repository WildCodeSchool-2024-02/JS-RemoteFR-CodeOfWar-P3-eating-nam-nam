import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DishCard({ dish }) {
  const dishWords = dish.description.split(" ");
  const maxWord = 40;
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, [navigate]);

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
      <Link
        to={`/recipes-instruction/${dish.id}`}
        className="Dish-button"
        onClick={handleScrollToTop}
      >
        En cuisine!
      </Link>
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
};
