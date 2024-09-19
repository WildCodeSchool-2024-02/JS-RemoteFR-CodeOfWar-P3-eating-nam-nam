import DishCard from "./DishCard";
import "../../styles/leBuffet/Buffet.css";
import "../../styles/leBuffet/DishCard.css";
import EntreeBanner from "../../assets/images/Entrée-buffet.png";
import PlatBanner from "../../assets/images/Plat-buffet.png";
import DessertBanner from "../../assets/images/Dessert-buffet.png";
import entree1 from "../../assets/images/entree1.jpg";
import entree2 from "../../assets/images/entree2.jpg";
import entree3 from "../../assets/images/entree3.jpg";
import plat1 from "../../assets/images/plat1.jpg";
import plat2 from "../../assets/images/plat2.jpg";
import plat3 from "../../assets/images/plat3.jpg";
import dessert1 from "../../assets/images/dessert1.jpg";
import dessert2 from "../../assets/images/dessert2.jpg";
import dessert3 from "../../assets/images/dessert3.jpg";

export default function LeBuffet() {
  const entrees = [
    {
      id: 1,
      name: "Tomate garnies et son houmous",
      description:
        "Une décicieuse tomate fraîche garnie de pousses germées, d’échalotes croquantes et de dés de concombre, pour une entrée légère et savoureuse. Accompagnées de toasts de houmous onctueux, préparés à base de pois chiches et d’huile d’olive, ces bouchées allient fraîcheur et gourmandise dans un parfait équilibre.",
      image: entree1,
    },
    {
      id: 2,
      name: "Vérinne saumon et oeufs de lump",
      description:
        "Découvrez une verrine élégante alliant saumon délicat, œufs de lump ciselés, et skyr crémeux, rehaussée d'un trait de jus de citron vert pour une touche de fraîcheur. Parsemée de ciboulette fraîche, cette entrée allie légèreté et sophistication en une seule bouchée.",
      image: entree2,
    },
    {
      id: 3,
      name: "Bruschetta",
      description:
        "Découvrez cette bruschetta au jambon, une harmonie de saveurs et de textures sur une tranche de pain dorée et croustillante. Garnie de tranches de jambon savoureux, d'olives noires subtilement salées, de lamelles d'avocat crémeux, de feuilles de salade croquantes et d'oignons finement émincés. Le tout est rehaussé d'un filet de crème balsamique onctueuse, apportant une touche d'acidité sucrée pour équilibrer chaque bouchée. Une entrée gourmande et rafraîchissante qui allie le meilleur de la tradition italienne à des ingrédients frais et modernes.",
      image: entree3,
    },
  ];

  const plats = [
    {
      id: 1,
      name: "Dahl de lentilles corail",
      description:
        "Un délicieux dahl de lentilles corail, mijoté lentement dans un mélange crémeux de lait de coco, d'épices chaleureuses et de tomates. Chaque bouchée offre une explosion de saveurs, avec des notes subtiles de cumin, de curcuma et de coriandre. Ce plat végétalien réconfortant et nourrissant vous enveloppe de sa douceur, tout en apportant une touche d'exotisme à votre table. Idéal pour une évasion culinaire au cœur de l'Inde, sans quitter le confort de chez soi.",
      image: plat1,
    },
    {
      id: 2,
      name: "Poke-Bawl",
      description:
        "Découvrez ce poke bowl équilibré et coloré, composé d'une omelette légère et moelleuse, de tomates cerises juteuses, de poireaux croquants, d'un demi-avocat crémeux et d'haricots rouges savoureux. Chaque ingrédient est soigneusement disposé pour créer une harmonie de textures et de saveurs, rehaussée par une touche de ciboulette fraîche, de cébette délicate et d'une sauce à l'échalote parfumée. Ce bol nutritif est un véritable voyage gustatif, alliant fraîcheur et gourmandise à chaque bouchée.",
      image: plat2,
    },
    {
      id: 3,
      name: "Vol-au-vent",
      description:
        "Laissez-vous séduire par ce vol-au-vent croustillant, garni d'une farce onctueuse et parfumée. Sa pâte feuilletée dorée abrite un mélange généreux de morceaux de volaille tendre, de champignons fondants et d'une sauce crémeuse subtilement relevée. Chaque bouchée est un parfait équilibre entre la légèreté du feuilletage et la richesse de la garniture. Un classique intemporel qui apporte une touche de raffinement à votre repas, tout en offrant un moment de pur réconfort.",
      image: plat3,
    },
  ];

  const desserts = [
    {
      id: 1,
      name: "Tiramisu aux petits beurres",
      description:
        "Savourez une version unique du tiramisu avec des petits beurres tendres à la place des traditionnels biscuits boudoirs. Recouvert d'un nappage de mousse au chocolat riche et velouté, ce dessert offre une douce harmonie entre le croquant des petits beurres et la légèreté de la mousse.",
      image: dessert1,
    },
    {
      id: 2,
      name: "Pancakes au caramel beurre salé",
      description:
        "Régalez-vous avec des pancakes moelleux, accompagnés d'une sauce maison au caramel beurre salé onctueuse et de pépites de chocolat fondantes. Chaque bouchée allie la douceur des pancakes à la richesse du caramel et au plaisir du chocolat, pour un petit-déjeuner ou un dessert irrésistible.",
      image: dessert2,
    },
    {
      id: 3,
      name: "Tarte aux pommes",
      description:
        "Découvrez une tarte aux pommes classique et savoureuse, avec une pâte sablée croustillante et une garniture généreuse de pommes fondantes. La tarte est légèrement caramélisée, avec un subtil parfum de cannelle, pour un équilibre parfait entre douceur et acidité. Un dessert intemporel qui ravira les amateurs de pâtisserie maison.",
      image: dessert3,
    },
  ];

  return (
    <div className="le-buffet-container">
      <h1>Le Buffet</h1>
      <h2 className="Buffet-quote">
        " Explorez, savourez, et découvrez de nouvelles saveurs chaque jour. "
      </h2>
      <p>
        Notre buffet est conçu pour éveiller vos papilles et vous offrir des
        plats délicieux qui sortent de l'ordinaire. Que vous soyez en quête
        d'inspiration ou simplement d'une pause gourmande, laissez-vous
        surprendre par notre sélection variée et savoureuse. Chaque plat est une
        invitation à explorer de nouvelles saveurs et à redécouvrir le plaisir
        de bien manger.
      </p>
      <section className="dish-section">
        <h2>Entrées</h2>
        <img src={EntreeBanner} alt="Entrées" className="dish-banner" />
        <div className="dish-row">
          {entrees.map((entree) => (
            <DishCard key={entree.id} dish={entree} />
          ))}
        </div>
      </section>
      <section className="dish-section">
        <h2>Plats</h2>
        <img src={PlatBanner} alt="Entrées" className="dish-banner" />
        <div className="dish-row">
          {plats.map((plat) => (
            <DishCard key={plat.id} dish={plat} />
          ))}
        </div>
      </section>
      <section className="dish-section">
        <h2>Desserts</h2>
        <img src={DessertBanner} alt="Entrées" className="dish-banner" />
        <div className="dish-row">
          {desserts.map((dessert) => (
            <DishCard key={dessert.id} dish={dessert} />
          ))}
        </div>
      </section>
    </div>
  );
}
