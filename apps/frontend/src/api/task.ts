import { CreateTask, UpdateTask } from '../interfaces/task.interface'

const API = 'http://localhost:3000/api'

export const createTaskRequest = (task: CreateTask) =>
  fetch(`${API}/task`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json',
    },
  })

export const getTaskRequest = () => fetch(`${API}/task`)

export const deleteTaskRequest = (id: string) =>
  fetch(`${API}/task/${id}`, { method: 'DELETE' })

export const updateTaskRequest = (id: string, task: UpdateTask) =>
  fetch(`${API}/task/${id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json',
    },
  })
