const express = require("express");
const app = express();

const router = express.Router();

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

router.get("/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});

router.get("/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});

app.use("/tasks", router);

module.exports = router;
