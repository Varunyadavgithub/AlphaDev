import express from "express";
import  dotenv from "dotenv";
import dbConnection from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

dbConnection();

// Middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});

// routes (APIs)
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/auth',authRoutes);

// Middleware to handle the error
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})


