const mongoose=require('mongoose');

const DBSchema = mongoose.Schema({
    email:{type:String,require:true},
    Title:{type:String,require:true},
    description:{type:String,require:true},
    status:{type:String,require:true},
},{timestamps:true,versionKey:false})

const tasksModel=mongoose.model('tasks',DBSchema);

module.exports=tasksModel;