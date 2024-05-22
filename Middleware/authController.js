const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");

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
    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(400).json({ error: "Login failed: " + error.message });
  }
});

module.exports = { registerUser, loginUser };
