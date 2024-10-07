import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/home/seeMoreRecipe.css";

export default function SeeMoreRecipe() {
  const [littleRecipe, setLittleRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/random?limit=2`)
      .then((response) => setLittleRecipe(response.data))
      .catch((error) => console.error(error));
  };
  console.info(littleRecipe);

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleImageClick();
    }
  };

  return (
    <div className="See_more">
      <h3>Voir aussi...</h3>
      {littleRecipe.length &&
        littleRecipe.map((little) => (
          <article key={little.id}>
            <div className="dishes1">
              <Link to={`/recipes-instruction/${little.id}`}>
                <button
                  onClick={handleImageClick}
                  onKeyDown={handleKeyPress}
                  className="imageSeeMore"
                  style={{ background: "none", border: "none", padding: 0 }}
                  type="button"
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${little.image_url}`}
                    alt={little.title}
                    className="imageSeeMore"
                  />
                </button>
              </Link>
            </div>
            <section>
              <h4>IDEE RECETTE</h4>
              <h5>{little.title}</h5>
              <p>{little.description}</p>
            </section>
          </article>
        ))}
    </div>
  );
}
