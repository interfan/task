import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../models/taskModel';

interface TaskListProps {
  tasks: Task[];
  onUpdate: (id: number, task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
