const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
} = require("../controllers/categoryController");

// @ api/categories

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategoryById);

module.exports = router;
