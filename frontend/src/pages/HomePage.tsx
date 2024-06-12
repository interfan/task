import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Task } from '../models/taskModel';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async (task: { title: string; description: string; status: string }) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const handleUpdateTask = async (id: number, updatedTask: Task) => {
    const { data } = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSave={handleAddTask} />
      <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
