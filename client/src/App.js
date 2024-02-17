import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Hedaers from "./components/Hedaers";
import AddProduct from "./components/AddProduct";
import { Route, Routes, useNavigate } from "react-router-dom";
import CompAffData from "./components/CompAffData";
import SignUp from "./components/SignUp";
function App() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [newData, setNewData] = useState({
    _id: Math.random(),
    name: "",
    price: 0,
    image: "",
    descr: "",
  });


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
    <Hedaers/>
    <Routes>
      <Route path="/" element={<CompAffData data={data}  deleteBtn={deleteBtn} setdata = {setdata} />}  />
      <Route path="/add" element={<AddProduct newData={newData} setNewData={setNewData} handleAdd = {handleAdd} />} />
      <Route path="/sign-up" element={<SignUp />} />
      
      </Routes>
    </>
  );
}

export default App;
