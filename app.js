const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT || 3030;
app.get("/",(req,res)=>{
    res.send("<h1>Domestic Waste Management System");
})

///routes management using middlewares
const dustbinRoute=require("./routes/dustbin")
const complaintRoute=require("./routes/raisecomplaint")
app.use("/dustbin",dustbinRoute)
app.use("/complaints",complaintRoute)
app.listen(port,()=>console.log(`sever is running on http://localhost:${port}`))