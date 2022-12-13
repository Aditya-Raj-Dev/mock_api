const EmiModel=require("../Model/Emi.model")

 const calculateEMi=async(req,res)=>{
    const {email,loan,annual,month}=req.body;
    let rate=annual/12/100
    console.log(rate)
  let EMI= loan*rate*(month+(rate*month))/((month+rate)-1)
    const data=await EmiModel.create({
        email,loan,annual,month,EMI
    })
    res.send({"msg":rate})
}


 const register=(req,res)=>{
    const {name,email,password}=req.body;
    const data=UserModel.create({
      name,email,password
    })
    res.send({"msg":"Signup Successfull"})
  }

 const Login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    console.log(user)
    if(user){
        res.send({"msg":"Login Successfull"})
    }
    else{
        res.send({"msg":"Login Failed"})
    }
  }


  module.exports={Login,register,calculateEMi}