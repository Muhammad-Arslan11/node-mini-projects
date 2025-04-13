const express = require("express");
const router = express.Router();
const { 
    basicRout, 
    createProduct, 
    getProducts, 
    getProduct, 
    updateProduct, 
    deleteProduct 
} = require("../Controllers/product.controller");

// Basic route
router.get("/", basicRout);

// Create product (POST)
router.post("/api/products", createProduct);

// Get all products (GET)
router.get("/api/products", getProducts);

// Get a single product by ID (GET)
router.get("/api/product/:id", getProduct);

// Update a product by ID (PUT)
router.put("/api/product/:id", updateProduct);

// Delete a product by ID (DELETE)
router.delete("/api/product/:id", deleteProduct);

module.exports = router;
