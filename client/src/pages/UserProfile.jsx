import { useState, useEffect } from "react";
import PersonalInfo from "./userProfile/PersonalInfo";
import UserInfo from "./userProfile/UserInfo";
import { getUserProfil } from "../services/request";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    civility: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserProfil();
        setUserData(data);
      } catch (err) {
        console.error("Erreur de récupération : ", err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      {userData ? <UserInfo userData={userData} /> : null}
      {userData ? (
        <PersonalInfo userData={userData} setUserData={setUserData} />
      ) : null}
    </>
  );
}
