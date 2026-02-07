const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
