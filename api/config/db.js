import mongoose from "mongoose";
import dotenv  from "dotenv";
import path from "path";

dotenv.config();

const dbConnection=()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("MongoDb connected successfully...!!!")
    }).catch((error)=>{
        console.log(error);
    })

    const _dirname=path.resolve();
}
export default dbConnection;