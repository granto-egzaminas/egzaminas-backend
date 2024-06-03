require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./Connection/connect");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/ads", require("./routes/adRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
