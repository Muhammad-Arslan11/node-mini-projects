

const express = require('express');
const mongoose = require('mongoose');
const db =  require('./models/db');
const cors =  require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/authRouter');
const productRouter = require('./Routes/productRouter');


const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// routing
app.use('/', authRouter);
app.use('/products', productRouter);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}!`);
});

