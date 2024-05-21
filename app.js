// npm start

require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./Connection/connect");

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is runing on prot " + PORT);
});
