import PropTypes from "prop-types";

import Advice from "./Advice";
import egg from "../../assets/images/oeuf.png";

import "../../styles/home/advice.css";

export default function Advices({ advices }) {
  console.info(advices);
  return (
    <section className="star">
      <img src={egg} alt="Oeuf" />
      {advices.map((advice) => (
        <Advice
          key={advice.id}
          name={advice.name}
          description={advice.description}
        />
      ))}
    </section>
  );
}

Advices.propTypes = {
  advices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
