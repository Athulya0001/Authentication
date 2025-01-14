import express from "express";
import { getAllUsers, signin, signup,signupForm , signinForm} from "../controllers/authController.js";
const route = express.Router();

route.get('/signup', signupForm);
route.get('/signin', signinForm);
route.post("/signup", signup)
route.get("/", getAllUsers)
route.post("/signin", signin)

export default route