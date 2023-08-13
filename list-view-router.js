const express = require("express");
const listViewRouter = express.Router();

const correctRequest = (req, res, next) => {
  const { status } = req.query;
  if (status !== "true" && status !== "false") {
    return res.status(400).json({ message: "Invalid request" });
  }
  next();
};

module.exports = (tasksList) => {
  listViewRouter.get("/", correctRequest, (req, res) => {
    const { status } = req.query;
    const filteredTasks = tasksList.filter(
      (task) => task.isCompleted === (status === "true")
    );
    res.json(filteredTasks);
  });

  return listViewRouter;
};
