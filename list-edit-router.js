const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

const tasks = [
  {
    id: "1",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "2",
    isCompleted: true,
    description: "Buy groceries",
  },
  {
    id: "3",
    isCompleted: false,
    description: "Clean the house",
  },
];

router.post("/", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: "Tarea creada exitosamente.", task: newTask });
});

router.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: "Tarea eliminada exitosamente.", deletedTaskId: taskId });
});

router.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, ...updatedTask };
    }
    return task;
  });

  res.json({ message: "Tarea actualizada exitosamente.", updatedTask });
});

module.exports = router;
