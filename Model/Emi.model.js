const  mongoose = require("mongoose")

const EmiSchema=mongoose.Schema({
    email:{type:String,required:true},
    loan:{type:Number,required:true},
    annual:{type:Number,required:true},
    month:{type:Number,required:true},
      EMI:Number

})


const EmiModel= mongoose.model("Emi",EmiSchema)

module.exports=EmiModel