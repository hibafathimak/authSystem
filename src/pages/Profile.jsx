import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/allAPI";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      if (!localStorage.getItem("token")) {
        navigate("/");
      } else {
        const result = await getUserProfile(
          localStorage.getItem("token").JSON().id
        );
        if (result.status == 200) {
          setUserData(result.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="form-container ">
        <h1>User Profile</h1>
        <div className="form-container ">
          {userData?.length > 0 &&
            userData.map((details) => (
              <>
                <p>Username: {details.username}</p>
                <p>Name:{details.name}</p>
                <p>Email: {details.email}</p>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
