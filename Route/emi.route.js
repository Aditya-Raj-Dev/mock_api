const {Router}=require("express")

const {calculateEMI}=require("../controller/emi.controller")

const EMIRouter=Router()

EMIRouter.get("/",async(req,res))

EMIRouter.post("/calculateemi",calculateEMI)

module.exports=EMIRouter