// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getTasks = () => api.get('/tasks');
export const createTask = (task: { title: string; description: string; status: string }) =>
  api.post('/tasks', task);
export const updateTask = (id: number, task: { title: string; description: string; status: string }) =>
  api.put(`/tasks/${id}`, task);
export const deleteTask = (id: number) => api.delete(`/tasks/${id}`);
