const TaskItem = require("../models/tasks");

exports.createTaskItem = async (req, res) => {
  try {
    const { taskName, date } = req.body;
    const taskItem = new TaskItem({ taskName, date });
    await taskItem.save();
    res.status(201).json(taskItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};