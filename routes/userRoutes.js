// userRoutes.js

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/userController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// /api/users/

router.post("/register", registerUser); // nedeti verify
router.post("/login", loginUser); // nedeti verify
router.post("/logout", verifyToken, logoutUser);
router.get("/", verifyToken, getUser);

module.exports = router;
