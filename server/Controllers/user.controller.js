const userModel = require("../Model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const secret = process.env.SECRET_KEY

    const signup =(req, res)=>{
        
        user = new userModel(req.body)
        user.save()
        .then((user)=>{
            console.log(user)
            res.send({message:'User Saved Successfully', status:true})
        }).catch(()=>{
            console.log("User not saved")
        })
    }


    const signin= async(req, res)=>{

        const {email, password} =req.body;
    let user;

    try {
        user = await userModel.findOne({email: email})
    } catch (error) {
        return new Error
    }
    if(!user){
         res.status(404).json({message:"Login credential not found"})
        console.log({message:"Login credential not found"})
    }

    const correctPassword = bcrypt.compareSync(password, user.password)

    if(!correctPassword){
       
        res.status(401).json({message:"Incorrect password"});
        console.log({message:"Incorrect password"})
    }else{
        const token = jwt.sign({user:user._id},secret, {expiresIn:"1hr"})

        res.status(200).json({message:"Login successfully", status:true, token:token})

        console.log({message:"Login successfully", status:true, token:token})
    }
        
   
    }

   

    const dashboard = (req,res)=>{

        userModel.find().then((data)=>{
           res.send(data)
           console.log(data)
        })
    }

    module.exports = {signup, signin,dashboard}