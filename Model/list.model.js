const  mongoose = require("mongoose")

const ListSchema=mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:Number,required:true},
    priority:{type:String,required:true},
    description:{type:String,required:true},
    createdAt:Date,
    
},{timestamps:true})
const ListModel= mongoose.model("List",ListSchema)
module.exports=ListModel