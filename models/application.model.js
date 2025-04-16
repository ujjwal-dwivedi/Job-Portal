import mongoose from "mongoose";
const applicationSchema=new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application=mongoose.model("Application",applicationSchema);