const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const listEditRouter = require("./list-edit-router");
const listViewRouter = require("./list-view-router");
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

app.use(bodyParser.json());

app.get("/tasksList", (req, res) => {
  res.json(tasks);
});

app.use("/tasks/edit", listEditRouter);
app.use("/tasks/view", listViewRouter);

app.listen(port, () => {
  console.log("Servidor Express corriendo");
});
