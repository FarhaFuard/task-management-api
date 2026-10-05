const db = require("../config/db");

function getAllTasks() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM tasks";

        db.query(sql, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        });
    });
}

function getTaskById(id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM tasks WHERE id = ?";

        db.query(sql, [id], (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results[0]);
        });
    });
}

function createTask(title) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO tasks (title, completed) VALUES (?, ?)";

        db.query(sql, [title, false], (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                id: result.insertId,
                title: title,
                completed: false
            });
        });
    });
}

function deleteTask(id) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM tasks WHERE id = ?";

        db.query(sql, [id], (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result.affectedRows > 0);
        });
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask
};