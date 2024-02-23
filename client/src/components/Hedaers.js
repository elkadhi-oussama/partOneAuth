import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeStateUser } from "../Redux/Slice/userSlice";
import { changeStateAuthUser } from "../Redux/Slice/authSlice";

const Hedaers = ({ userPrivate, adminPrivate }) => {
  const dipatch = useDispatch();
  const navigator = useNavigate();
  const lougoutFunc = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Admin");
    dipatch(changeStateAuthUser(false));
    dipatch(changeStateUser());
    navigator("/");
  };
  return (
    <div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li style={{ cursor: "pointer" }}>Home</li>
          </Link>
          <Link to={"/article"}>
            <li style={{ cursor: "pointer" }}>Article</li>
          </Link>
          {!userPrivate && (
            <>
              <Link to={"/sign-up"}>
                <li style={{ cursor: "pointer" }}>Sign Up</li>
              </Link>
              <Link to={"/sign-in"}>
                <li style={{ cursor: "pointer" }}>Sign in</li>
              </Link>
            </>
          )}

         
          {userPrivate && (
            <Link to={"/private"}>
              <li style={{ cursor: "pointer" }}>private</li>
            </Link>
          )}
          {adminPrivate && (
            <>
            <Link to={"/private-admin"}>
              <li style={{ cursor: "pointer" }}>Admin</li>
            </Link>
            <Link to={"/add"}>
            <li style={{ cursor: "pointer" }}>AddProduct</li>
          </Link>
          </>
          )}
          {userPrivate && (
            <li onClick={lougoutFunc} style={{ cursor: "pointer" }}>
              logout
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Hedaers;
