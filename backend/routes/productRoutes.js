const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", protect, authorizeRole("admin"), createProduct);
router.get("/:id", getProductById);
router.put("/:id", protect, authorizeRole("admin"), updateProduct);
router.delete("/:id", protect, authorizeRole("admin"), deleteProduct);

module.exports = router;
