const taskService = require("../services/taskService");

async function getTasks(req, res) {
    try {
        const tasks = await taskService.getAllTasks();

        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve tasks"
        });
    }
}

async function getTask(req, res) {
    try {
        const id = parseInt(req.params.id);

        const task = await taskService.getTaskById(id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve task"
        });
    }
}

async function createTask(req, res) {
    try {
        const { title } = req.body;

        const task = await taskService.createTask(title);

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

async function deleteTask(req, res) {
    try {
        const id = parseInt(req.params.id);

        const deleted = await taskService.deleteTask(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete task"
        });
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask
};