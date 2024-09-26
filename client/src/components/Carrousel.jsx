import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/carrousel.css";

export default function Carrousel() {
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

  const [carrouselRecipe, setCarrouselRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/random?limit=5`)
      .then((response) => setCarrouselRecipe(response.data))
      .catch((error) => console.error(error));
  };
  console.info(carrouselRecipe);
  useEffect(() => {
    fetchData();
  }, []);

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
        {carrouselRecipe.length &&
          carrouselRecipe.map((recipe) => (
            <div key={recipe.id} className="cards">
              <Link to={`/recipes-instruction/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
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
