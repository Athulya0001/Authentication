import express from "express";

const route = express.Router();

route.get("/signin",(req, res)=>{
    res.render("signin")
})

route.get("/signup", (req, res)=>{
    res.render("signup")
})

export default route