const BookmarkModel = require("../Model/bookmark");
const ListModel=require("../Model/list.model")

  const postlist=async(req,res)=>{
    const {title,quantity,priority,date,timestamp,description}=req.body;
    const data=await ListModel.create({
        title,quantity,priority,date,timestamp,description
    })
    res.send({"msg":data})
}

const getlist=async(req,res)=>{
  const data= await ListModel.find()
   res.send({"msg":data})
}

const getbookmark=async(req,res)=>{
  const data= await BookmarkModel.find()
   res.send({"msg":data})
}


 const deletelist=async(req,res)=>{
  await ListModel.findOneAndDelete(req.params.id)
  res.send({"msg":"Item Deleted"})
 }


 const bookmark=async(req,res)=>{
  const {title,quantity,priority,date,timestamp,description}=req.body;
  const data=await BookmarkModel.create({
    title,quantity,priority,date,timestamp,description
   })
res.send({"msg":data})
 }


module.exports={postlist,getlist,deletelist,bookmark,getbookmark}