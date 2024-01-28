import jwt from "jsonwebtoken"
import User from "../Models/User.js"

const isAuth = async(req,res, next)=>{
            
    try {
        const tokenUser =  req.headers["auth"]
        // decoder token
        const decoded = await jwt.verify(tokenUser, process.env.privateKey)

        if(!decoded){
           return res.status(401).send({msg: "user not auth , problem decoded"})
        }
        const userFind = await User.findById(decoded._id)
        if(!userFind){
            return res.status(401).send({msg: "user not auth , problem find user"})
        }
        req.user = userFind
        next()

    } catch (error) {
        res.status(500).send({msg : "we have some error", error})
    }
} 


export default isAuth