const { Schema } = require("mongoose");

const UserSchema=Schema.create({
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
    }

},{timestamp:true});

exports.model("User",UserSchema);