const express = require("express");
const app = express();
const port = 3000;
const loginRoutes = require("./login-routes");

app.use(express.json());

const tasksList = [
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

app.use((req, res, next) => {
  const methodValidate = req.method.toUpperCase();

  const response = ["POST", "PUT", "GET", "DELETE"];

  if (!response.includes(methodValidate)) {
    return res.status(400).json({ message: "Invalid method" });
  }
  next();
});

const listEditRouter = require("./list-edit-router")(tasksList);
const listViewRouter = require("./list-view-router")(tasksList);

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);
app.use(loginRoutes);

app.get("/tasks", (req, res) => {
  res.json(tasksList);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
