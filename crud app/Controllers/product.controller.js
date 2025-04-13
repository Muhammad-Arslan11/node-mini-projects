const express = require("express");
const Product = require("../model/product.model.js");

const basicRout = async(req, res)=>{
    res.send(`<h1>routing routing!!!</h1>`);
}

const createProduct = async(req, res)=>{
    try{
        // write code here
          const product =  await Product.create(req.body);
          res.status(200).json(product);
      
          }
          catch(error){
             res.status(500).json({message: error.message});
          }
}

const getProducts = async(req, res)=>{
    try{
        // write code here
          const product =  await Product.find({});
          res.status(200).json(product);
          console.log(req.body);
      
          }
          catch(error){
             res.status(500).json({message: error.message});
          }
}

const updateProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            res.status(404).json({message: "Product not found!"})
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
     
    }
     catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProduct = async(req, res)=>{
   


    try {
        const {id} = req.params;
     const product =   await Product.findById(id);
     if(!product){
        res.status(404).json({message: "Product not found!"});
     }
     res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const deleteProduct = async(req, res)=>{
      try {
          const {id} = req.params;
          const product = await Product.findByIdAndDelete(id);
          if(!product){
              res.status(404).json({message: "Product not found!"})
          }
          res.status(200).json({message: "Item successfully deleted!"})
  
  
          // const updatedProduct = await Product.findById(id);
          // res.status(200).json(updatedProduct);
       
      }
       catch (error) {
          res.status(500).json({message: error.message})
      }
}


// export all functions
module.exports = {
    basicRout,
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
}