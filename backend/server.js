const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

const URI = process.env.MONGO_URL;



mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 })

  

 app.use("/api/auth", authRoute);



app.listen("5000", () => {
  console.log("Backend is running.");
});