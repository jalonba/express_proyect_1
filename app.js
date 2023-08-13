const express = require("express");
const app = express();
const port = 3000;
const loginRoutes = require("./login-routes");

app.use(express.json());

app.use((req, res, next) => {
  const methodValidate = req.method.toUpperCase();

  const response = ["POST", "PUT", "GET", "DELETE"];

  if (!response.includes(methodValidate)) {
    return res.status(400).json({ message: "Invalid method" });
  }
  next();
});

const listEditRouter = require("./list-edit-router");
const listViewRouter = require("./list-view-router");

app.use("/list-view", listEditRouter);
app.use("/list-edit", listViewRouter);
app.use(loginRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
