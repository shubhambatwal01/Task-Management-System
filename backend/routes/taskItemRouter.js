const express = require("express");
const taskItemRouter = express.Router();
const taskItemController = require("../controllers/taskItemController");

taskItemRouter.post("/", taskItemController.createTaskItem);

module.exports = taskItemRouter;
