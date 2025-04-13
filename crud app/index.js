
require("dotenv").config();
const express  = require("express");
const mongoose = require("mongoose");
const Product  = require("./model/product.model");
const router = require("./Routes/product.route");

const app = express();

// middlewares
app.use(express.json());  // this is for json middleware
app.use(express.urlencoded({ extended: true }));  // this middleware is for form data coming from url 


// routers
app.use("/", router );  // basic router
app.use("/api/products", router );  // get all products
app.use("/api/products", router );  // post products
app.use("/api/product/:id", router );  // get a single product
app.use("/api/product/:id", router );  // update product
app.use("/api/product/:id", router );  // delete product

// add mongoose connection string here
mongoose.connect("mongodb+srv://codemail862:Kif9qlfej9IVTcSQ@apiproject.5wnpyr2.mongodb.net/?retryWrites=true&w=majority&appName=apiProject")
.then(()=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`app is running on port:${port}`);
})

