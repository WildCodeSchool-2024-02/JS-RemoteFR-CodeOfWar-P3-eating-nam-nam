import Header from "./createRecipe/Header";
import Step from "./createRecipe/Step";

import "../styles/create/create.css"

export default function CreateRecipe() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.info(event);

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <Header />
            <Step /> 
        </form>
    )
}