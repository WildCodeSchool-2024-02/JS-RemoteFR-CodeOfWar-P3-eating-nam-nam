import apostrophe from "../../assets/images/Apostrophe.png";
import star from "../../assets/images/étoile.png";

export default function Advice() {
  return (
    <div className="Advice">
      <div className="Apostrophe">
        <img src={apostrophe} alt="apostrophe" />
        <img src={apostrophe} alt="apostrophe" />
      </div>
      <section>
        <h3>Elsa</h3>
        <p>
          "J'ai testé cette recette de lasagnes végétariennes hier soir, et
          c'était un pur délice! Les couches d'aubergines et de courgettes
          grillées se marient parfaitement avec la sauce tomate maison, riche et
          parfumée. Le mélange de fromages fondus ajoute une onctuosité
          irrésistible. Le tout est simple à préparer et a été un véritable
          succès auprès de toute la famille. Une recette que je referai sans
          hésiter!"
        </p>
      </section>
      <section className="Star">
        <img src={star} alt="étoiles" />
        <img src={star} alt="étoiles" />
        <img src={star} alt="étoiles" />
        <img src={star} alt="étoiles" />
        <img src={star} alt="étoiles" />
      </section>
    </div>
  );
}
