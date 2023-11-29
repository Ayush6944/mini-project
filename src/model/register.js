const mongoose=require("mongoose");
// import mongoose from "mongoose";

const custSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     phone:{
        type:Number,
        required:true,
        unique:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:Number,
        required:true,
        unique:true
     },
     gender:{
        type:String,
        required:true
     }
})

const Register = new mongoose.model("register",custSchema);
// module.exports.default = Register;
export default Register;