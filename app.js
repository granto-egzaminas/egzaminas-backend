require("dotenv").config();
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is runing on port " + PORT);
});
