const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

// CREATE
app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.json(task);
});

// READ
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  tasks = tasks.map(t =>
    t.id == req.params.id ? { ...t, ...req.body } : t
  );
  res.json({ message: "Updated" });
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Task API running"));