const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.log(error);
    console.error("database connection fail");
    console.log(process.env.MONGO_URI);
    process.exit(0);
  }
};

module.exports = connectDB;
