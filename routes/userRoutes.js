const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/userController");
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");
// /api/users/

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/", checkAdminRole, (req, res) => {
  res.json(req.user);
});

module.exports = router;
