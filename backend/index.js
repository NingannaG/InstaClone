const express=require("express");
const app=express();
const mongoose=require("mongoose");
const env=require("dotenv")
const cors=require("cors");
const post=require("./routes/post")
env.config();

app.use(cors())
app.use(express.json())

app.use("/",post);
// app.get("/",(req,res)=>{
//     res.send("This is from backend");
// })

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connected to mongo DB.")
}).catch((e)=>{
    console.log(e);
})

app.listen(5000,()=>{
    console.log("backend is listening....")

})