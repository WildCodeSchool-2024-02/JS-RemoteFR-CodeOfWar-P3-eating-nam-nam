import PropTypes from "prop-types";
import { motion, Reorder } from "framer-motion";
import "../../styles/create/recipeSteps.css";

export default function RecipeSteps({ steps, updateSteps }) {
  const updateStepNumbers = (stepsArray) => stepsArray.map((step, index) => ({
      ...step,
      step_number: index + 1
    }));

  const addStep = () => {
    const newStep = {
      id: String(Date.now()),
      content: `Nouvelle étape ${steps.length + 1}`,
      step_number: steps.length + 1
    };
    updateSteps(updateStepNumbers([...steps, newStep]));
  };

  const updateStep = (id, newContent) => {
    updateSteps(
      steps.map((step) =>
        step.id === id ? { ...step, content: newContent } : step
      )
    );
  };

  const deleteStep = (id) => {
    updateSteps(updateStepNumbers(steps.filter((step) => step.id !== id)));
  };

  const handleReorder = (newOrder) => {
    updateSteps(updateStepNumbers(newOrder));
  };

  return (
    <div className="recipe-steps">
      <h2>Étapes de la Recette</h2>
      <Reorder.Group axis="y" values={steps} onReorder={handleReorder}>
        {steps.map((step) => (
          <Reorder.Item key={step.id} value={step}>
            <motion.div
              className="step-card"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="step-content">
                <span className="drag-handle">&#8942;</span>
                <div className="step-number">{step.step_number}</div>
                <input
                  type="text"
                  value={step.content}
                  onChange={(e) => updateStep(step.id, e.target.value)}
                  className="step-input"
                />
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteStep(step.id)}
                >
                  &#10060;
                </button>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button type="button" onClick={addStep} className="add-step-button">
        <span className="plus-icon">+</span>
        Ajouter une étape
      </button>
    </div>
  );
}

RecipeSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      step_number: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateSteps: PropTypes.func.isRequired,
};