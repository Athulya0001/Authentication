import express from "express";
import { getAllUsers, signin, signup } from "../controllers/authController.js";
import { name } from "ejs";
import {checkAuth} from "../middleware/authMiddleware.js";

const route = express.Router();


route.get("/signup", (req, res)=>{
    return res.render("signup");
})


route.get("/signin", checkAuth, (req, res) => {
    return res.render("signin", {
        name: req.user ? req.user.name : null, 
    });
});


// route.get("/in", (req, res)=>{
//     return res.render("signin");
// })

route.post("/signup", signup)
route.get("/", getAllUsers)
route.post("/signin", signin)

route.get("/check",checkAuth, (req, res)=>{
    // res.json({message: "route called after authMiddleware"})
    res.render("signin", {name})
})

export default route