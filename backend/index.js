const express=require("express");
const app=express();
const mongoose=require("mongoose");
const env=require("dotenv")
env.config();
const cors=require("cors");
const helmet=require("helmet");
const morgon=require("morgan")
const post=require("./routes/post");
const user=require("./routes/user")
const conversation=require("./routes/conversations")
const message=require("./routes/messages")

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgon());

app.use("/post",post);
app.use("/user/",user);
app.use("/conversation",conversation)
app.use("/messages",message)
// app.use("/user",user);
// app.get("/",(req,res)=>{
//     res.send("This is from backend");
// })

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("Connected to mongo DB.")
}).catch((e)=>{
    console.log(e);
})

app.listen(5000,()=>{
    console.log("backend is listening....")

})