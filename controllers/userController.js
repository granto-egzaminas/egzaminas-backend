/** @format */

// userController.js

const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// user register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userService.registerUser(name, email, password);
    res.status(201).json({ message: "Registration successful", user });
  } catch (error) {
    res.status(400).json({ error: "Registration failed: " + error.message });
  }
});

// user login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(400).json({ error: "Login failed: " + error.message });
  }
});

// user logout
const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  try {
    const result = await userService.logoutUser(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: "Logout failed: " + error.message });
  }
});

// get user
const getUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "User not found: " + error.message });
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.getUser(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isBlocked = true;
    await user.save();
    res.status(200).json({ message: "User blocked successfully", user });
  } catch (error) {
    res.status(400).json({ error: "User blocking failed: " + error.message });
  }
});

module.exports = { registerUser, loginUser, logoutUser, getUser, blockUser };
