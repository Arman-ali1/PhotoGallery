import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async ()=>{
    try{
    const connectionInstanceObject =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected !! \n DB_Host ${connectionInstanceObject.connection.host}`)
    }catch(error){
        console.log(`Error to Connecting DB `,error);
        process.exit(1);
    }
}
export default connectDB;