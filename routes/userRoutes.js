/** @format */

// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  blockUser,
} = require("../controllers/userController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// /api/users/

router.post("/register", registerUser); // No verifyToken needed
router.post("/login", loginUser); // No verifyToken needed
router.post("/logout", verifyToken, logoutUser);
router.get("/", verifyToken, getUser);
router.patch("/block/:id", verifyToken, checkAdminRole, blockUser); // New route for blocking users

module.exports = router;
