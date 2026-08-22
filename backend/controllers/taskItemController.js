const TaskItem = require("../models/tasks");

exports.createTaskItem = async (req, res) => {
  try {
    const taskName = req.body.taskName?.trim();
    const { date } = req.body;

    if (!taskName) {
      return res.status(400).json({ message: "Task name is required" });
    }

    const taskItem = await TaskItem.create({
      taskName,
      date,
      owner: req.user._id,
    });

    res.status(201).json(taskItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTaskItems = async (req, res) => {
  try {
    const taskItems = await TaskItem.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(taskItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTaskItem = async (req, res) => {
  try {
    const deletedTask = await TaskItem.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ id: deletedTask._id });
  } catch (error) {
    res.status(400).json({ message: "Invalid task id" });
  }
};

exports.markCompleted = async (req, res) => {
  try {
    const taskItem = await TaskItem.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      { completed: true },
      { new: true, runValidators: true },
    );

    if (!taskItem) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(taskItem);
  } catch (error) {
    res.status(400).json({ message: "Invalid task id" });
  }
};
