// require("dotenv").config({path: "./env"})
import mongoose from "mongoose";

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: './.env' })


connectDB()

.then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server listen aur chal rha hai port ${process.env.PORT}`);
    });
})












/*
import express from "express"
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("errror",(error)=>{
            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on Port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
})()
*/ 