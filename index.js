import express from "express";

const app = express();

app.get("/greet",(req, res)=>{
    res.status(200).json({
        success: true,
        msg: "Hello welcome here bro yaarrrr"
    })
});

app.listen(3000, ()=>{
    console.log("Server Started at 3000");
});