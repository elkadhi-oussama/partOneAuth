import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setadminPrivate }) => {
  const navigator = useNavigate();
  const [errorsHan, seterrorsHan] = useState(null);
  const [newUser, setnewUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        newUser
      );
      setadminPrivate(response.data.response.isAdmin);
      if (response.status === 200) {
        navigator("/");
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      if (error.response.data.errors) {
        seterrorsHan(error.response.data.errors);
      } else {
        seterrorsHan([error.response.data]);
      }
    }
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          id="password"
        />

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      {errorsHan
        ? errorsHan.map((error, index) => (
            <ul key={index}>
              {" "}
              <li> {error.msg} </li>{" "}
            </ul>
          ))
        : null}
    </div>
  );
};

export default SignIn;
