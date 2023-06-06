const mongoose  = require("mongoose");

const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
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
    username:{
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
    fallow:{
        type:[],
        required:false
    },
    unfallow:{
        required:false,
        type:[]
    }


},{timestamp:true});

module.exports=mongoose.model("User",UserSchema);