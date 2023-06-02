const express=require("express");
const app=express();
const mongoose=require("mongoose");
const env=require("dotenv")
const cors=require("cors")
env.config();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connected to mongo DB.")
}).catch((e)=>{
    console.log(e);
})
app.use

app.listen(5000,()=>{
    console.log("backend is listening....")

})