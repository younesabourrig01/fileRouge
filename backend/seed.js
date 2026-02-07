const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = require("./data/products");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(async () => {
    console.log("DB connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data inserted");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
