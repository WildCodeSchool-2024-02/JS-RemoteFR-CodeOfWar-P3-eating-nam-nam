import axios from "axios";

export default function Upload() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        // 1er étape: Récupérer le fichier que l'on va upload
        const file = event.target[0].files[0];

        // 2ème étape: Form data
        const formData = new FormData();
        formData.append("file", file);

        // 3ème étape: Envoyer avec une requête axios
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.info("Réponse de la requête: ", response);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" />
            <button type="submit">Upload</button>
        </form>
    )
}