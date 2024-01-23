import mongoose, { model } from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pseudo: {
    type: String,
    required: true,
    default : "hello"
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default : false
  },
});

const User = mongoose.model("user", userSchema);

export default User
