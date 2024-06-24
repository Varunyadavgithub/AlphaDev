import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();

const dbConnection=()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("MongoDb connected successfully...!!!")
    }).catch((error)=>{
        console.log(error);
    })
}
export default dbConnection;