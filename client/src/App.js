import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [newData, setNewData] = useState({
    _id: Math.random(),
    name: "",
    price: 0,
    image: "",
    descr: "",
  });

 
  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await axios.get("http://localhost:5000/product");
      setdata(response.data.response);
    };

    getDataFromServer();
  }, []);
 // function for add data to dataBase
 const handleAdd = async (newData) => {
  const response = await axios.post("http://localhost:5000/product", newData);
  
};
//

//function delete
const deleteBtn = async (id) => {
  const response = await axios.delete("http://localhost:5000/" + id);
  window.location.reload()
};
//end
  return (
    <>
      {data.map((product) => (
        <div key={product._id}>
          <img src={product.image} alt="" />
          <h1> {product.name} </h1>
          <span> {product.price} </span>
          <p> {product.descr} </p>
          <button onClick={() => deleteBtn(product._id)}>delete</button>
        </div>
      ))}

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
    </>
  );
}

export default App;
