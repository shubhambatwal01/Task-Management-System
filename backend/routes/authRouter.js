const express = require("express");
const authController = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/me", protect, authController.getMe);

module.exports = authRouter;
