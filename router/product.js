import express from "express";
import Product from "../Models/Product.js";

const router = express.Router();

// CRUD
// POST METHOD
router.post("/product", async (req, res) => {
  const { name, price, image, descr } = req.body;
  try {
    const newProduct = new Product({ name, price, image, descr });
    await newProduct.save();
    res.status(200).send({ msg: "new product saved", response: newProduct });
  } catch (error) {
    res.status(500).send({ msg: "can not save a new product", reponse: error });
  }
});
// end POST METHOD
// GET METHOD
router.get("/product", async (req, res) => {
  try {
    const getProduct = await Product.find();
    res
      .status(200)
      .send({ msg: "all data getted from dataBase", response: getProduct });
  } catch (error) {
    res.status(500).send({ msg: "can not get product", reponse: error });
  }
});
// end GET METHOD
// Delete METHOD
router.delete("/:id", async (req, res) => {
  try {
    const productDeleted = await Product.deleteOne({ _id: req.params.id });
    productDeleted.deletedCount
      ? res
          .status(200)
          .send({ msg: "product deleted", response: productDeleted })
      : res.status(200).send({ msg: "product already deleted" });
  } catch (error) {
    res.status(500).send({ msg: "can not deleted product", reponse: error });
  }
});
//end Delete METHOD

// Update MEthod
router.put("/:id", async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    updateProduct.modifiedCount
      ? res
          .status(200)
          .send({ msg: "product updated", response: updateProduct })
      : res.status(200).send({ msg: "product already updated" });
  } catch (error) {
    res.status(500).send({ msg: "can not updated product", reponse: error });
  }
});
//end update
//end CRUD

export default router 
