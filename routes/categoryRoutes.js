/** @format */

// routes/categoryRoutes.js

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

router.post("/", verifyToken, checkAdminRole, createCategory); // Ensure only admins can create categories
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", verifyToken, checkAdminRole, deleteCategoryById); // Ensure only admins can delete categories

module.exports = router;
