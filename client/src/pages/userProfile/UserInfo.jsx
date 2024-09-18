import PropTypes from "prop-types";
import userPicture from "../../assets/images/user_picture.png";
import "../../styles/userProfile/userInfo.css";

export default function UserInfo({ userData }) {
  const getCivility = (civility) => {
    if (civility === "0") return "Monsieur";
    if (civility === "1") return "Madame";
    return "Autre";
  };

  return (
    <div className="UserReception">
      <section className="Left">
        <img src={userPicture} alt="Photo_utilisateur" />
      </section>
      <section className="Right">
        <article className="top">
          <h1>MON PROFIL</h1>
        </article>
        <article className="bottom">
          <p>Civilité: {getCivility(userData.civility)}</p>
          <p>
            Inscrit depuis: {new Date(userData.created_at).toLocaleDateString()}
          </p>
        </article>
      </section>
    </div>
  );
}

UserInfo.propTypes = {
  userData: PropTypes.shape({
    civility: PropTypes.oneOf(["0", "1", "2"]).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
