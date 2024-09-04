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
          Des supers idées de recettes ! Tout est livré à domicile ! Les
          produits sont frais et bons. Gain de temps énorme sur les courses !
          J’adore.
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
