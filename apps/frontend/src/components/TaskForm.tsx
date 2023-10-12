import { ChangeEvent, FormEvent, useState } from 'react'
import { useTask } from '../hooks/useTask'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: false,
  })

  const { createTask } = useTask()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTask(task)
    e.currentTarget.reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='border-2 border-gray-400 rounded-lg p-2 bg-zinc-700 block w-full my-2'
          type='text'
          name='title'
          placeholder='Ingrese el titulo'
          onChange={handleChange}
        />
        <textarea
          className='border-2 border-gray-400 rounded-lg p-2 bg-zinc-700 block w-full my-2'
          name='description'
          rows={3}
          cols={5}
          placeholder='Descripción...'
          onChange={handleChange}
        ></textarea>
        <label
          htmlFor=''
          className='inline-flex items-center gap-x-2 py-2'
        >
          <input
            type='checkbox'
            className='w-5 h-5 text-indigo-600'
            onChange={(_e) => setTask({ ...task, status: !task.status })}
          />
          <span>Completada</span>
        </label>
        <button className='rounded-sm px-3 py-2 bg-cyan-700 block w-full'>Crear Tarea</button>
      </form>
    </div>
  )
}

export default TaskForm
