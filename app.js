require("dotenv").config();

const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

//for parsing
app.use(express.json()); //  for parsing JSON bodies
app.use(express.urlencoded({ extended: true })); //url encoded parsing

// router
app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server is running at port: ${process.env.PORT}`);
  });
});
