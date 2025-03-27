import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/allAPI";
import { BiUserCircle } from "react-icons/bi";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      console.log(localStorage.getItem("userId"));
      
        const result = await getUserProfile(
          localStorage.getItem("userId")
      );
      console.log(result);
      
        if (result.status === 200) {
          setUserData(result.data);
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
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center flex-col border p-5 rounded">
          <BiUserCircle className="text-5xl text-cyan-900"/>
          <h1 className="text-3xl text-center font-bold">USER PROFILE</h1>
          <div className="flex justify-center items-center flex-col">
          
                  <p className="text-xl text-gray-800 my-1">Username: {userData.username}</p>
                  <p className="text-xl text-gray-800 my-1">Name:{userData.name}</p>
                  <p className="text-xl text-gray-800 my-1">Email: {userData.email}</p>
                
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
