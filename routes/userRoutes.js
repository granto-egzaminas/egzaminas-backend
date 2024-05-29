/** @format */

// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  blockUser,
} = require("../controllers/userController");

// Middleware
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Routes
router.post("/register", registerUser); // No verifyToken needed
router.post("/login", loginUser); // No verifyToken needed
router.post("/logout", verifyToken, logoutUser);
router.get("/:id", verifyToken, getUser);
router.get("/", verifyToken, getUsers);
router.delete("/:id", verifyToken, checkAdminRole, blockUser);

module.exports = router;
