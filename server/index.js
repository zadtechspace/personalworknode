const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');
const router = require('./Routes/user.routes');
const cors = require("cors")



let PORT = process.env.PORT

let URI = process.env.URI

app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use(express.json())

app.use("/", router)




app.listen(PORT,()=>{
    mongoose.connect(URI).then(()=>{
        console.log(`App is running on port ${PORT} And Database is connected`)
    }).catch((err)=>{
        console.log(err)
        console.log("Database not connected");
    })
})