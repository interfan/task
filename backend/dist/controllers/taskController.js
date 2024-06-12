"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
let tasks = [];
const getTasks = (req, res) => {
    res.json(tasks);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { title, description, status } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: status || 'pending',
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.createTask = createTask;
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find((task) => task.id === parseInt(id));
    if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
        res.json(task);
    }
    else {
        res.status(404).json({ message: 'Task not found' });
    }
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    res.status(204).send();
};
exports.deleteTask = deleteTask;
