const { tasks } = require("../models/taskModel").default;

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.json(task);
};

exports.updateTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  tasks.splice(index, 1);
  res.json({ message: "Deleted" });
};