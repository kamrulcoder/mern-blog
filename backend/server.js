const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const postRoute = require("./routes/posts");


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
 app.use("/api/users", userRoute);
 app.use("/api/categories", categoryRoute);
 app.use("/api/posts", postRoute);


app.listen("5000", () => {
  console.log("Backend is running.");
});