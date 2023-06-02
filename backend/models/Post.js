const mongoose = require("mongoose");

const PostSchema=new mongoose.Schema(
    {
        image:{
            type:[],
            required:false,
        },
        video:{
            type:[],
            required:false,
        },
        description:{
            type:String,
            required:false,
            default:"Hi this is my post, Please like and share and support !"
        }
    },
    {timestamp:true}

)
module.exports=mongoose.model("Post",PostSchema)