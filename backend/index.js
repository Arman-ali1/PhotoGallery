import express from "express";
import dotenv from "dotenv"
import connectDB from "./DB/DB.js"; 
import { User } from "./models/User.model.js";
import { resolve } from "path";
import { rejects } from "assert";
import { log } from "console";
import cors from "cors"
dotenv.config();

connectDB();
const app = express();

app.use(cors())

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server started...");
});



let data;

app.get("/api",(req,res)=>{
    res.send("<h1>hello User</h1>")
})
app.get("/api/users",(req,res)=>{
    
    const allusers =  User.find().then((doc)=>{
        data=doc;
        console.log(typeof data, data);
        res.send(doc);
    })
})
export default data;
