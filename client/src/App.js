import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Hedaers from "./components/Hedaers";
import AddProduct from "./components/AddProduct";
import { Route, Routes, useNavigate } from "react-router-dom";
import CompAffData from "./components/CompAffData";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Private from "./components/Private";
import PrivatePageForAdmin from "./components/PrivatePageForAdmin";
import ProtectedRoute from "./Router/ProtectedRoute";
import WelcomePage from "./components/WelcomePage";
import { useSelector } from "react-redux";
function App() {
  const userPrivate = useSelector((state) => state.user.value);
  const adminPrivate = useSelector((state) => state.auth.value);
  const [data, setdata] = useState([]);
  const [newData, setNewData] = useState({
    _id: Math.random(),
    name: "",
    price: 0,
    image: "",
    descr: "",
  });

  // test user is login or not
  // console.log("userPrivate : ", userPrivate);
  console.log("adminPrivate : ", adminPrivate);
  return (
    <>
      <Hedaers userPrivate={userPrivate} adminPrivate={adminPrivate} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/article"
          element={<CompAffData data={data} setdata={setdata} />}
        />

        <Route
          path="/add"
          element={
            <ProtectedRoute isAllowed={adminPrivate}>
              {" "}
              <AddProduct newData={newData} setNewData={setNewData} />{" "}
            </ProtectedRoute>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/private"
          element={
            <ProtectedRoute isAllowed={userPrivate}>
              {" "}
              <Private />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/private-admin"
          element={
            <ProtectedRoute isAllowed={adminPrivate}>
              {" "}
              <PrivatePageForAdmin />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
