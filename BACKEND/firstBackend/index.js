import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import AuthRouter from  "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from './src/config/dbConection.config.js';

const app = express();

app.use(express.json());

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);

//Defoult API
app.get("/", (req,res) => {
    console.log("Default get API hit");
    res.json({message: "Welcome to my first backend Project"});
});

app.use((err,req,res,next) => {
    const ErrMessage = err.message || "Internal Server Error";
    const ErrStausCode = err.statusCode || 500;

    res.status(ErrStausCode).json({message:ErrMessage});
});

const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log("Server Started on port:" , port);
    connectDB();
});