const express = require("express");
require("./config/db");

const taskController = require("./controllers/taskController");

const app = express();

app.use(express.json());

app.get("/", taskController.getTasks);
app.get("/tasks", taskController.getTasks);
app.get("/tasks/:id", taskController.getTask);
app.post("/tasks", taskController.createTask);
app.delete("/tasks/:id", taskController.deleteTask);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});