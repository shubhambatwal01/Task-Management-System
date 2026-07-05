const mongoose = require("mongoose");

const taskItemSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    date: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskItemSchema);
