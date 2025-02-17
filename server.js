import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connectDB.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';


const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

connectDB()

app.use(cookieParser())

app.set("view engine", "ejs");


app.use("/auth", authRoutes)
// app.use("/", authRoutes)

app.get("/", (req, res)=>{
    res.render("index")
})

// app.get("/auth/signup",(req, res)=>{
//     res.render("signup");
// })

// app.get("/auth/signin",(req, res)=>{
//     res.render("signin");
// })

// app.use("/", getAllUsers)

// app.get("/", (req, res)=>{
//     res.render('index')
// })

app.listen(port,()=>{
    console.log("Server is listening on port", port)
})