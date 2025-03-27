import React, { useState } from "react";
import { registerAPI } from "../services/allAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const navigate = useNavigate();

  const submitform = async (e) => {
    e.preventDefault();
    if (username && email && password && name) {
      try {
        console.log({ username, email, password, name });
        const result = await registerAPI({ username, email, password, name });
          if (result.status === 201) {
              alert("Registration Success");
              navigate("/login");
        }  
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("fill the form completely");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="border flex items-center justify-center flex-col rounded shadow-xl ">
        <h1 className="text-2xl text-center text-gray-500 mt-2">Register </h1>
        <form className="flex items-center justify-center flex-col  p-6">
          <input
            onChange={(e) => setusername(e.target.value)}
            className="border rounded mb-2 p-2 w-full"
            type="text"
            placeholder="Enter Username"
          />
          <input
            onChange={(e) => setemail(e.target.value)}
            className="border rounded mb-2 p-2 w-full"
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setname(e.target.value)}
            className="border rounded mb-2 p-2 w-full"
            type="text"
            placeholder="Enter Name"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            className="border rounded mb-2 p-2 w-full"
            type="password"
            placeholder="Enter Password"
          />
          <button
            onClick={submitform}
            className="border rounded bg-black text-white p-4 mt-5 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
