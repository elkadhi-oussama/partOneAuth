import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompAffData = ({ data, setdata }) => {
  const navigate = useNavigate()
  //get Data
  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await axios.get("http://localhost:5000/product");
      setdata(response.data.response);
    };

    getDataFromServer();
  }, []);
  //end 
    //function delete
    const deleteBtn = async (id) => {
      const response = await axios.delete("http://localhost:5000/" + id);
      navigate("/");
    };
    //end

  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <img src={product.image} alt="" />
          <h1> {product.name} </h1>
          <span> {product.price} </span>
          <p> {product.descr} </p>
          <button onClick={() => deleteBtn(product._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default CompAffData;
