const {Router}=require("express")

const {postlist, getlist,deletelist, bookmark, getbookmark}=require("../controller/list.controller")


const ListRouter=Router()

ListRouter.post("/",postlist)

ListRouter.get("/",getlist)

ListRouter.delete("/:id",deletelist)

ListRouter.post("/bookmark",bookmark)

ListRouter.get("/bookmark",getbookmark)

module.exports=ListRouter