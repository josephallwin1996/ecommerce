const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const crypto = require("crypto");

const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");



mongoose.connect("mongodb+srv://josephallwin1996:joseph1234@ecommerce.klmxh9h.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce", {
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).
then( () => {
    console.log("Connected to mongo db")
}).
catch((err) => {
    console.log(err);
});

app.listen(port,() =>{
    console.log(`Server Running on port ${port}`);
})