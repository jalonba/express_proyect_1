const express = require("express");
const app = express();
const port = 3000;

const taskList = [
  {
    id: "1",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "2",
    isCompleted: false,
    description: "Buy groceries",
  },
  {
    id: "3",
    isCompleted: false,
    description: "Clean the house",
  },
];

app.get("/taskList", (req, res) => {
  res.json(taskList);
});
app.listen(port, () => {
  console.log("Servidor Express corriendo");
});
