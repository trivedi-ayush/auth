const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authmiddleware");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", protect, forgotPassword);
router.put("/reset-password/:token", protect, resetPassword);

module.exports = router;
