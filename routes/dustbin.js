const { Router}=require("express")
const router=Router()

router.get("/",(req,res)=>{
    //send dustbin detail
    res.send("<h1>Dustbin</h1>")
})
router.post("/",(req,res)=>{
    //add new dustbn
})
module.exports=router