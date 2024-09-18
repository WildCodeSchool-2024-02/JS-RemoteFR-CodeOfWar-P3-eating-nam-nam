import "../styles/recipesinstruction.css";
import photoProfil from "../assets/images/user_picture.png";
import boulettesBolognaise from "../assets/images/boulettes_bolognaise.svg";
import difficultyFacile from "../assets/images/facile.svg";
import star from "../assets/images/étoile.png";
import gantDeCuisson from "../assets/images/gant_de_cuisson.svg";
import four from "../assets/images/four.svg";
import smileyLangue from "../assets/images/smiley_langue.svg";
import heartRed from "../assets/images/heart-red.svg";

export default function RecipesInstruction() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="card-recipe">
      <article className="card-recipe-orange">
        <div className="Countain">
          <div className="Pseudo-Avatar">
            <img src={photoProfil} alt="profil de l'utilisateur" />
            <p>CookDiary_anais</p>
          </div>
          <div className="dishes">
            <img
              src={boulettesBolognaise}
              alt="plat de boulettes a la bolognaise"
            />
          </div>

          <div className="Difficult-Heart">
            <img src={difficultyFacile} alt="difficulté facile" />
            <section className="Boulettes-Ratings">
              <h2>
                Boulettes <br />
                bolognaise
              </h2>
              <div className="ratings">
                {stars.map((starId) => (
                  <img src={star} key={starId} alt="Star" />
                ))}
              </div>
            </section>

            <img src={heartRed} alt="coeur rouge" />
          </div>

          <div className="Desciption-recipe">
            <p>
              Des boulettes bolognaise pour les gourmands de cuisine italienne
            </p>
          </div>
        </div>
      </article>

      <article className="card-recipe-green">
        <div className="Gant-Four">
          <div className="gant-de-cuisson">
            <img
              src={gantDeCuisson}
              alt="logo de gants pour le temps préparation"
            />
            <p>
              10 minutes <br />
              Préparation
            </p>
          </div>
          <div className="four">
            <img src={four} alt="logo de pour pour le temps de cuisson" />
            <p>
              15 minutes <br />
              Cuisson
            </p>
          </div>
        </div>
      </article>

      <article className="Ingredients">
        <h2>Ingrédients</h2>
        <div className="Liste-Ingredients">
          <div>100g de pâtes</div>
          <div>80g sauce tomate</div>
          <div>1 càs parmesan</div>
          <div>1 càs chapelure</div>
          <div>1 steak haché</div>
          <div>1/4 oeuf</div>
          <div>1/4 échalote</div>
          <div>3 feuilles de basilic</div>
        </div>
      </article>

      <article className="Recette-green">
        <div className="Recette">
          <h2>Recette</h2>
          <div className="Etape-Global">
            <div className="Etape">
              <h3>Étape 1 :</h3>
              <p>
                Si besoin, faites décongeler les steaks hachés. Émincez
                l’échalote finement.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 2 :</h3>
              <p>
                Dans un récipient ajoutez le boeuf, l’oeuf, la
                chapelure,l’echalote, la moitié du parmesan, salez, poivrez,
                malaxer le tout avec les mains.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 3 :</h3>
              <p>
                Faire des boulettes de 4 cm environ en les roulant entre vos
                doigts.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 4 :</h3>
              <p>
                Cuire les pâtes selon les instructions du paquet dans une eau
                salée.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 5 :</h3>
              <p>
                Faire revenir les boulettes 5 minutes à la poêle bien chaude
                avec un filet d'huile d'olive.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 6 :</h3>
              <p>
                En fin de cuisson, baisser le feu au minimum, ajoutez la sauce
                tomate, 1 cuillère à soupe d'eau/personne et laissez mijoter le
                temps de la prochaine étape.
              </p>
            </div>
            <div className="Etape">
              <h3>Étape 7 :</h3>
              <p>
                Une fois les pâtes cuites, égouttez-les, puis mélangez-les avec
                la sauce et les boulettes. Servir avec un peu de parmesan
                (optionnel : et de basilic frais si vous en avez) sur le dessus.
                C'est prêt !
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="Smiley-Langue">
        <h3>Bon Appétit</h3>
        <img src={smileyLangue} alt="Smiley qui tire la langue" />
      </article>
    </div>
  );
}
