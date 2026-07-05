const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const BodyParser = require("body-parser");
require("dotenv").config();
const taskItemRouter = require("./routes/taskItemRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use("/api/tasks", taskItemRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
