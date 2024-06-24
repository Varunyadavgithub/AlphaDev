import express from "express";
import  dotenv from "dotenv";
import dbConnection from "./config/db.js";

const app = express();
dotenv.config();

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
