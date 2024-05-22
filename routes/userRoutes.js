const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");
// /api/users/

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.get("/", verifyToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
