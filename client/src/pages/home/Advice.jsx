import PropTypes from "prop-types";
import apostrophe from "../../assets/images/Apostrophe.png";
import star from "../../assets/images/étoile.png";

import "../../styles/home/advice.css";

export default function Advice({ name, description }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="Advice">
      <div className="Apostrophe">
        <img src={apostrophe} alt="Apostrophe" />
        <img src={apostrophe} alt="Apostrophe" />
      </div>
      <section className="Advice1">
        <h3>{name}</h3>
        <p>{description}</p>
      </section>
      <section className="Star">
        {stars.map((starId) => (
          <img src={star} key={starId} alt="Star" />
        ))}
      </section>
    </div>
  );
}

Advice.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
