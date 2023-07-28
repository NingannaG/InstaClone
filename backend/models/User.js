const mongoose  = require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:false,
        default:false
    },
    like:{
        type:[],
        required:false
    },
    fallower:{
        type:[],
        required:false
    },
    fallowing:{
        required:false,
        type:[]
    }


},{timestamps:true});

module.exports=mongoose.model("User",UserSchema);