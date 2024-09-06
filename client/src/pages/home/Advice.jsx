import PropTypes from "prop-types";

import "../../styles/home/advice.css";

export default function Advice({ advices }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {advices.map((advice) => (
        <div className="Advice" key={advice.id}>
          <img src={advice.imageEgg} alt={advice.alt1} />
          <div className="Apostrophe">
            <img src={advice.imageApp} alt={advice.alt2} />
            <img src={advice.imageApp} alt={advice.alt2} />
          </div>
          <section className="Advice1">
            <h3>{advice.name}</h3>
            <p>{advice.description}</p>
          </section>
          <section className="Star">
            {stars.map((star) => (
              <img src={advice.imageStar} key={star} alt={advice.alt3} />
            ))}
          </section>
        </div>
      ))}
    </>
  );
}

Advice.propTypes = {
  advices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imageEgg: PropTypes.string.isRequired,
      alt1: PropTypes.string.isRequired,
      imageApp: PropTypes.string.isRequired,
      alt2: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageStar: PropTypes.string.isRequired,
      alt3: PropTypes.string.isRequired,
    })
  ).isRequired,
};
