import express from "express";
import path from'path';
import bodyParser from 'body-parser';
import config from "./config/config.js";
import mongoose from 'mongoose';


const app = express();
const __dirname =path.resolve();
app.use(bodyParser.json())
// mongoose connect mongoDB
mongoose.connect(config.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
})
.then(()=>{
    console.log('server connect')
})
.catch((error)=>{
    console.log(error.message);
})
//End mongoose connect mongoDB

app.use(express.static(path.join(__dirname,"/frontend")));
//get frontend file
app.get("*",(req,res)=>{

    res.sendFile(path.join(__dirname,"/frontend/index.html"))
})
//End get frontend file
app.listen(config.PORT,console.log(`server running port ${config.PORT}`));