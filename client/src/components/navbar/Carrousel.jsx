import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/carrousel.css";

export default function Carrousel({ items }) {
  const carrouselRef = useRef(null);

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
        {items.map(({ id, image, name }) => (
          <div key={id} className="cards">
            <Link to="/recipes-instruction">
              <img src={image} alt={name} />
            </Link>
            <Link to="/recipes-instruction">
              <h3>{name}</h3>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
