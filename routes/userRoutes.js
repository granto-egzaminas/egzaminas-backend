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
} = require("../controllers/userController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// /api/users/

router.post("/register", registerUser); // No verifyToken needed
router.post("/login", loginUser); // No verifyToken needed
router.post("/logout", verifyToken, logoutUser);
router.get("/:id", verifyToken, getUser);
router.get("/", verifyToken, getUsers);
router.patch("/block/:id", verifyToken, checkAdminRole); // New route for blocking users

module.exports = router;
