const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
} = require("../controllers/categoryController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// @ api/categories

router.post("/", verifyToken, createCategory);
router.get("/", verifyToken, getAllCategories);
router.get("/:id", verifyToken, getCategoryById);
router.delete("/:id", verifyToken, deleteCategoryById);

module.exports = router;
