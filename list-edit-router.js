const express = require("express");
const listEditRouter = express.Router();

const validationRequest = (req, res, next) => {
  const { id, isCompleted, description } = req.body;

  if (!id || !isCompleted || !description) {
    return res.status(400).json({ message: "Invalid information" });
  }

  req.body.isCompleted = JSON.parse(isCompleted);

  next();
};

module.exports = (tasks) => {
  listEditRouter.post("/create", validationRequest, (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json(newTask);
  });

  listEditRouter.delete("/delete/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      const deletedTask = tasks.splice(index, 1);
      res.json(deletedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  });

  listEditRouter.put("/update/:id", validationRequest, (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      // Si se encuentra la tarea
      tasks[index] = { ...tasks[index], ...updatedTask };
      res.json(tasks[index]);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  });

  return listEditRouter;
};
