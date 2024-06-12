// src/controllers/taskController.ts
import { Request, Response } from 'express';
import { Task } from '../models/taskModel';

let tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    description,
    status: status || 'pending',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find((task) => task.id === parseInt(id));
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== parseInt(id));
  res.status(204).send();
};