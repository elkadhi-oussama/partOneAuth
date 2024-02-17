import axios from "axios";
import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigator = useNavigate();
  const [errorsHan, seterrorsHan] = useState(null);
  const [newUser, setnewUser] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newUser.password === newUser.confirmPassword) {
        const updateUSer = delete newUser.confirmPassword;
        const response = await axios.post(
          "http://localhost:5000/user/register",
          newUser
        );
        if (response.status === 200) {
          navigator("/");
        }
      } else {
        seterrorsHan([{msg : "your passowrd showed be identique"}]);
      }
    } catch (error) {
      if (error.response.data.errors) {
        seterrorsHan(error.response.data.errors);
      } else {
        seterrorsHan([error.response.data]);
      }
    }
  };
  console.log(errorsHan);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="pseudo"
          id="pseudo"
          onChange={handleChange}
        />
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
        <input
          type="password"
          placeholder="confirm password"
          onChange={handleChange}
          id="confirmPassword"
        />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      {errorsHan
        ? errorsHan.map((error) => (
            <ul>
              {" "}
              <li> {error.msg} </li>{" "}
            </ul>
          ))
        : null}
    </div>
  );
};

export default SignUp;
