import { useRef } from "react";
import PropTypes from "prop-types";
import "../../styles/carrousel.css";

export default function Carrousel({ items }) {
  const carrouselRef = useRef(null);

  const scroll = (direction) => {
    if (carrouselRef.current) {
      const scrollAmount = carrouselRef.current.offsetWidth;
      const maxScrollLeft =
        carrouselRef.current.scrollWidth - carrouselRef.current.clientWidth;

      if (direction === "left") {
        if (carrouselRef.current.scrollLeft === 0) {
          carrouselRef.current.scrollLeft = maxScrollLeft;
        } else {
          carrouselRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      } else if (direction === "right") {
        if (carrouselRef.current.scrollLeft >= maxScrollLeft) {
          carrouselRef.current.scrollLeft = 0;
        } else {
          carrouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
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
        {items.map((item) => (
          <div key={item.id} className="cards">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
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
