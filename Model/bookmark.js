const  mongoose = require("mongoose")

const BookmarkSchema=mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:Number,required:true},
    priority:{type:String,required:true},
    description:{type:String,required:true},
    createdAt:Date,
    
},{timestamps:true})


const BookmarkModel= mongoose.model("Bookmark",BookmarkSchema)

module.exports=BookmarkModel