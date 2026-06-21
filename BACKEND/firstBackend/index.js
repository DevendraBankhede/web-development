import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();


app.get("/", (req,res) => {
    console.log("Default get API hit");
    res.json({message: "Welcome to my first backend Project"});
});

app.post("/login",(req, res) => {
    res.json({ message: "Login Successfull"})
});

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log("Server Started on port:" , port);
});