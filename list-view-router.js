const express = require("express");
const listViewRouter = express.Router();
const tasksList = require("./tasksList.json");

const correctRequest = (req, res, next) => {
  const { status } = req.query;
  if (status !== "true" && status !== "false") {
    return res.status(400).json({ message: "Invalid request" });
  }
  next();
};

listViewRouter.get("/", (req, res) => {
  res.status(200).json(tasksList);
});

listViewRouter.get("/filter", correctRequest, (req, res) => {
  const { status } = req.query;
  const isCompleted = status === "true";

  try {
    const filteredTasks = tasksList.filter(
      (task) => task.isCompleted === isCompleted
    );

    res.status(200).json(filteredTasks);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = listViewRouter;
