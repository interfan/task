// src/models/taskModel.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'completed';
}
