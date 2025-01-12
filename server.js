import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connectDB.js';
import route from './routes/authRoutes.js';

const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

connectDB()

app.set("view engine", "ejs");

app.use("/auth", route)

app.get("/", (req, res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log("Server is listening on port", port)
})