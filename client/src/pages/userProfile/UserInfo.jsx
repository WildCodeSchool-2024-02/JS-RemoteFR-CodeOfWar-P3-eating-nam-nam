import userPicture from "../../assets/images/user_picture.png";
import "../../styles/userProfile/userInfo.css";

export default function UserInfo() {
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
          <p>Civilité:</p>
          <p>Inscrit depuis ....</p>
        </article>
      </section>
    </div>
  );
}
