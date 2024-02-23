import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = ({setNewData,newData}) => {
 const navigate = useNavigate()
   // function for add data to dataBase
   const handleAdd = async (newData) => {
    const response = await axios.post("http://localhost:5000/product", newData);
    navigate("/");
  };
  //
  return (
    <div>
        <div className="inputFiled">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setNewData({ ...newData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="image"
          onChange={(e) => setNewData({ ...newData, image: e.target.value })}
        />
        <input
          type="number"
          placeholder="prix"
          onChange={(e) => setNewData({ ...newData, price: +e.target.value })}
        />
        <input
          type="text"
          placeholder="descr"
          onChange={(e) => setNewData({ ...newData, descr: e.target.value })}
        />
        <button onClick={() => handleAdd(newData)}>Submit</button>
      </div>
    </div>
  )
}

export default AddProduct