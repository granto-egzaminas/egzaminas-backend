const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const User = require("user modelio vieta")

const registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserActivation({
      username,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json("Invalid Credentials");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json("Invalid Credentials");
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.json({ user, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { registerUser, loginUser };
