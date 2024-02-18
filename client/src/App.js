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
function App() {
  const navigate = useNavigate();
  const [userPrivate, setuserPrivate] = useState(false);
  const [adminPrivate, setadminPrivate] = useState(false);
  const [data, setdata] = useState([]);
  const [newData, setNewData] = useState({
    _id: Math.random(),
    name: "",
    price: 0,
    image: "",
    descr: "",
  });

  // test user is login or not

  // function for add data to dataBase
  const handleAdd = async (newData) => {
    const response = await axios.post("http://localhost:5000/product", newData);
    navigate("/");
  };
  //

  //function delete
  const deleteBtn = async (id) => {
    const response = await axios.delete("http://localhost:5000/" + id);
    navigate("/");
  };
  //end
  return (
    <>
      <Hedaers
        userPrivate={userPrivate}
        adminPrivate={adminPrivate}
        setuserPrivate={setuserPrivate}
        setadminPrivate={setadminPrivate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CompAffData
              data={data}
              deleteBtn={deleteBtn}
              setdata={setdata}
              setuserPrivate={setuserPrivate}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddProduct
              newData={newData}
              setNewData={setNewData}
              handleAdd={handleAdd}
            />
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/sign-in"
          element={<SignIn setadminPrivate={setadminPrivate} />}
        />
        <Route
          path="/private"
          element={userPrivate ? <Private /> : <SignIn />}
        />
        <Route
          path="/private-admin"
          element={adminPrivate ? <PrivatePageForAdmin /> : <SignIn />}
        />
      </Routes>
    </>
  );
}

export default App;
