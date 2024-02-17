//importation
import mongoose from "mongoose";
//end
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  price: Number,
  image: Array,
  descr: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;