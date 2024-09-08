import { useRef } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/carrousel.css";

function Carrousel({ items }) {
  const carrouselRef = useRef(null);

  const scrollLeft = () => {
    carrouselRef.current.scrollBy({
      left: -300, // Ajuste cette valeur pour contrôler le défilement vers la gauche
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carrouselRef.current.scrollBy({
      left: 300, // Ajuste cette valeur pour contrôler le défilement vers la droite
      behavior: "smooth",
    });
  };

  return (
    <div className="carrousel-container">
      <button className="carrousel-btn left" onClick={scrollLeft} type="button">
        &#10094;
      </button>
      <div className="carrousel" ref={carrouselRef}>
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-info">
              <h3>{item.name}</h3>
              {/* Optionnel : les champs 'price' et 'deliveryTime' */}
              {item.price && <p>{item.price}</p>}
              {item.deliveryTime && <p>{item.deliveryTime}</p>}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carrousel-btn right"
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Clé unique obligatoire
      name: PropTypes.string.isRequired,
      price: PropTypes.string, // Optionnel, certaines données peuvent ne pas l'avoir
      deliveryTime: PropTypes.string, // Optionnel
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carrousel;
