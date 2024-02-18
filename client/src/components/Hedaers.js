import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hedaers = ({userPrivate,adminPrivate, setuserPrivate, setadminPrivate}) => {
  const navigator = useNavigate()
  const lougoutFunc = ()=>{
    localStorage.removeItem('token');
    setadminPrivate(false)
    setuserPrivate(false)
    navigator("/")
  }
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
          <Link to={"/sign-in"}>
            <li style={{ cursor: "pointer" }}>Sign in</li>
          </Link>
          <Link to={"/add"}>
            <li style={{ cursor: "pointer" }}>AddProduct</li>
          </Link>
          {userPrivate &&   <Link to={"/private"}>
            <li style={{ cursor: "pointer" }}>private</li>
          </Link>}
          {adminPrivate &&   <Link to={"/private-admin"}>
            <li style={{ cursor: "pointer" }}>Admin</li>
          </Link>}
          {userPrivate &&  
            <li onClick={lougoutFunc}  style={{ cursor: "pointer" }}>logout</li>
          }
        </ul>

      </nav>
    </div>
  );
};

export default Hedaers;
