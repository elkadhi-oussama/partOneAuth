console.clear();

// importation
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
//importation CRUD from router file for Product
import routerProduct from "./router/product.js";
//importation CRUD from router file for User
import routerUser from "./router/user.js";
// importation for read file HTML
import path from "path";
import { fileURLToPath } from "url";
//end

// declaration of variable
const app = express();
// read data form .env file
dotenv.config();
//end

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//end middleware

const PORT = process.env.PORT;
const url = process.env.URL_DB;

//connection to dataBase
mongoose
  .connect(url)
  .then(console.log("dataBase is Connect"))
  .catch((err) => console.log("can not connected to dataBase ", err));
//end

app.use("/", routerProduct);
app.use("/user", routerUser);

// lancement du serveur

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on Port ${PORT}`);
});
