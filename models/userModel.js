const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please add email"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "simple",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
