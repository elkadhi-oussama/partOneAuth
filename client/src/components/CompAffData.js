import axios from "axios";
import React, { useEffect } from "react";

const CompAffData = ({ data, deleteBtn, setdata, setuserPrivate }) => {
  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await axios.get("http://localhost:5000/product");
      setdata(response.data.response);
    };

    getDataFromServer();
  }, []);
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    // change private route state
    if (getToken) {
      setuserPrivate(true);
    }
  }, []);

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
