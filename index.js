const express =require("express")
const connection = require("./database/db")
const UserModel=require("./Model/model")
const EmiModel =require("./Model/Emi.model")
const cors = require("cors")
const ListModel = require("./Model/list.model")
const ListRouter = require("./Route/list.route")

const app=express()
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send("welcome")
})

app.use("/list",ListRouter)


// app.post("/emicalculate",async(req,res)=>{
//     const {email,loan,annual,month}=req.body;
//     let rate=annual/12/100
//   let EMI= Math.trunc(loan*rate*(month+(rate*month))/((month+rate)-1))
//     const data=await EmiModel.create({
//         email,loan,annual,month,EMI
//     })
//     res.send({"msg":EMI})
// })

// app.post("/register",(req,res)=>{
//   const {name,email,password}=req.body;
//   const data=UserModel.create({
//     name,email,password
//   })
//   res.send({"msg":"Signup Successfull"})
// })

// app.post("/login",async (req,res)=>{
//     const {email,password}=req.body;
//     const user=await UserModel.findOne({email,password})
//     console.log(user)
//     if(user.email===email && user.password===password){
//         res.send({"msg":"Login Successfull"})
//     }
//     else{
//         res.send({"msg":"Login Failed"})
//     }
//   })

app.listen(8080,async()=>{
    try{
        await connection
        console.log("database connnected")
    }
    catch(e){
        console.log(e)
    }
    console.log("server Started")
})