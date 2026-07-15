import express from "express";
export const app = express();

app.get("/greet",(req, res)=>{
    res.status(200).json({
        success: true,
        msg: "Hello welcome here bro yaarrrr"
    })
});