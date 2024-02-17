import React from "react";
import { Link } from "react-router-dom";

const Hedaers = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li style={{ cursor: "pointer" }}>Home</li>
          </Link>
          <Link to={"/sign-up"}>
            <li style={{ cursor: "pointer" }}>Sign Up</li>
          </Link>
          <Link to={"/add"}>
            <li style={{ cursor: "pointer" }}>AddProduct</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Hedaers;
