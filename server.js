const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const dotenv=require("dotenv").config();


const maprouter = require("./routes/maproutes")


app.use(express.json());
app.use(maprouter);


//mongodb接続
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.fv8sfao.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("DB接続に成功しました"))
    .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log("server running");
})


