import express from "express";
import { getAllUsers, signin, signup } from "../controllers/authController.js";
const route = express.Router();

route.post("/signup", signup)
route.get("/", getAllUsers)
route.post("/signin", signin)

export default route