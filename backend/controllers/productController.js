const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
