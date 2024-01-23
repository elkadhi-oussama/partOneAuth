import express from "express";
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import {registerRules, loginRules, validation} from "../middleware/validator.js"

const router = express.Router();

//register

router.post("/register",registerRules(), validation, async (req, res) => {
  const { email, password, pseudo, isAdmin } = req.body;
  try {
    const userEmail = await User.findOne({ email });
    const userPseudo = await User.findOne({ pseudo });
    if (userEmail || userPseudo) {
      return res.status(400).send({ msg: "email or pseudo already exist" });
    }
    // hashed password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    

    //end hashed password
    const newUser = new User({ email, password, pseudo, isAdmin });
    newUser.password = hashedPassword
    await newUser.save();
    res.status(200).send({ msg: "new user saved", response: newUser });
  } catch (error) {
    res.status(500).send({ msg: "can not save a new user", response : error });
  }
});

// login 

router.post("/login",loginRules(), validation, async(req,res)=>{
    const {email , password} = req.body
    try {
        const emailLogin = await User.findOne({email})
        if(!emailLogin){
          return  res.status(400).send({msg: "Bad credential"})
        }
       
        const passwordLogin = await bcrypt.compare(password, emailLogin.password )
        if(!passwordLogin){
            return  res.status(400).send({msg: "Bad credential"})  
        }
        res.status(200).send({msg : "succes login", response : emailLogin})


        
    } catch (error) {
        res.status(500).send({ msg: "login failed", response : error });
    }
})

export default router;
