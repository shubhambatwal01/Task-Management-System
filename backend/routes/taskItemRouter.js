const express = require("express");
const taskItemRouter = express.Router();
const taskItemController = require("../controllers/taskItemController");

taskItemRouter.get("/", taskItemController.getAllTaskItems);
taskItemRouter.post("/", taskItemController.createTaskItem);
taskItemRouter.delete("/:id", taskItemController.deleteTaskItem);
taskItemRouter.put("/:id/completed", taskItemController.markCompleted);

module.exports = taskItemRouter;
