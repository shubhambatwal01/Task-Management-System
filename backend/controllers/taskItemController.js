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

exports.getAllTaskItems = async (req, res) => {
  try {
    const taskItems = await TaskItem.find();
    res.status(200).json(taskItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTaskItem = async (req, res) => {
  const { id } = req.params;
  await TaskItem.findByIdAndDelete(id);
  res.status(204).json({ _id: id });
};

exports.markCompleted = async (req, res) => {
  const { id } = req.params;
  const taskItem = await TaskItem.findById(id);
  taskItem.completed = true;
  await taskItem.save();
  res.json(taskItem);
};
