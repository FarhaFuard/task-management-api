const taskDao = require("../dao/taskDao");

function getAllTasks() {
    return taskDao.getAllTasks();
}

function getTaskById(id) {
    return taskDao.getTaskById(id);
}

function createTask(title) {
    if (!title || title.trim() === "") {
        throw new Error("Task title is required");
    }

    return taskDao.createTask(title.trim());
}

function deleteTask(id) {
    return taskDao.deleteTask(id);
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask
};