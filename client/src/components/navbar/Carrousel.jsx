import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/carrousel.css";

export default function Carrousel({ items }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - 350);
  };

  const scrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + 350);
  };

  useEffect(() => {
    const carrouselElement = document.querySelector(".carrousel");
    if (carrouselElement) {
      carrouselElement.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  return (
    <div className="carrousel-container">
      <button
        className="carrousel-bouton left"
        onClick={scrollLeft}
        type="button"
      >
        &#10094;
      </button>
      <div className="carrousel">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-info">
              <h3>{item.name}</h3>
              {item.price && <p>{item.price}</p>}
              {item.deliveryTime && <p>{item.deliveryTime}</p>}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carrousel-bouton right"
        onClick={scrollRight}
        type="button"
      >
        &#10095;
      </button>
    </div>
  );
}

// Validation des props avec PropTypes
Carrousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string,
      deliveryTime: PropTypes.string,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
