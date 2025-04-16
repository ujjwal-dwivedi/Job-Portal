import mongoose from 'mongoose';
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requiremments:[{type:String}],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:
    {
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Scchema.Types.ObjectID,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectID,
        ref:'User',
        required: true
    },
    applications:[
        {
            type: mongoose.Schema.Types.ObjectID,
            ref:'Application'
        }
    ]
},{timestamps:true});
export const Job=mongoose.model("Job",jobSchema);