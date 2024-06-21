const mongoose = require("mongoose")

const bcrypt = require('bcrypt')



const userSchema = mongoose.Schema(

    {
        firstName:{type:String, require: true},
        lastName:{type:String, require:true},
        email:{type:String, unique:true},
        password:{type:String, require:true}
    }
)

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then((hashed)=>{
        this.password = hashed
        console.log(hashed)
        next()
    }).catch((error)=>{
        console.log(error)
    })
    
})


const userModel = mongoose.model("users", userSchema)

 module.exports = userModel