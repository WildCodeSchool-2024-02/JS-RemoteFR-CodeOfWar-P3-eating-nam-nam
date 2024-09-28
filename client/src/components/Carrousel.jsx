import { Link } from "react-router-dom";
import { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/carrousel.css";

export default function Carrousel({ category }) {
  const carrouselRef = useRef(null);
  console.info("Category: ", category);

  const scroll = (direction) => {
    if (!carrouselRef.current) return;

    const { offsetWidth, scrollWidth, clientWidth, scrollLeft } =
      carrouselRef.current;
    const scrollAmount = offsetWidth;
    const maxScrollLeft = scrollWidth - clientWidth;

    let newScrollLeft;
    if (direction === "left") {
      newScrollLeft =
        scrollLeft === 0 ? maxScrollLeft : scrollLeft - scrollAmount;
    } else if (direction === "right") {
      newScrollLeft =
        scrollLeft >= maxScrollLeft ? 0 : scrollLeft + scrollAmount;
    }
    carrouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="carrousel-container">
      <button
        className="carrousel-bouton left"
        onClick={() => scroll("left")}
        type="button"
      >
        &#10094;
      </button>
      <div className="carrousel" ref={carrouselRef}>
        {category.recipes.length > 0 &&
          category.recipes.map((recipe) => (
            <div key={recipe.id} className="cards">
              <Link to={`/recipes-instruction/${recipe.id}`}>
                <div className="dishes4">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${recipe.image_url}`}
                    alt={recipe.title}
                    className="imageCarrousel"
                  />
                </div>
              </Link>
              <Link to={`/recipes-instruction/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
            </div>
          ))}
      </div>
      <button
        className="carrousel-bouton right"
        onClick={() => scroll("right")}
        type="button"
      >
        &#10095;
      </button>
    </div>
  );
}

Carrousel.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
