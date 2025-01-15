import express from "express";
import { dummy, getAllUsers, signin, signup } from "../controllers/authController.js";
const route = express.Router();


route.get("/signup", (req, res)=>{
    return res.render("signup");
})

route.get("/signin", (req, res)=>{
    return res.render("signin");
})

// route.get("/in", (req, res)=>{
//     return res.render("signin");
// })

route.get("/dummy", dummy)

route.post("/signup", signup)
route.get("/", getAllUsers)
route.post("/signin", signin)

export default route