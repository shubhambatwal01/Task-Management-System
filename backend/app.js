const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskItemRouter = require("./routes/taskItemRouter");
const authRouter = require("./routes/authRouter");

const app = express();

const normalizeOrigin = (value) => value?.replace(/\/+$/, "");
const frontendUrl = normalizeOrigin(process.env.FRONTEND_URL);
const allowedOrigins = [frontendUrl, "http://localhost:5173"].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      const requestOrigin = normalizeOrigin(origin);
      if (!requestOrigin || allowedOrigins.includes(requestOrigin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/tasks", taskItemRouter);

app.use((err, req, res, next) => {
  console.error("Global error handler:", err);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS error: Your domain is not allowed",
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is missing from environment variables");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 1101, () => {
      console.log(`Server is running on port ${process.env.PORT || 1101}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
