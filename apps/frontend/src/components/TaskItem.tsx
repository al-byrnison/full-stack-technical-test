import { useTask } from '../hooks/useTask'
import { Task } from '../interfaces/task.interface'
import { IoCheckmarkCircleSharp, IoTrashBin } from 'react-icons/io5'

interface Props {
  task: Task
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTask()

  return (
    <div
      key={task._id}
      className='rounded-sm bg-gray-800 p-2 my-2 flex justify-between hover:gb-gray-800 hover:cursor-pointer'
    >
      <div>
        <h2>{task.title}</h2>
        <p className=' text-sm text-gray-600'>{task.description}</p>
      </div>
      <div className='flex gap-x-2'>
        <button
          onClick={async () => {
            updateTask(task._id, {
              status: !task.status,
            })
          }}
        >
          {task.status ? (
            <IoCheckmarkCircleSharp className='text-green-600' />
          ) : (
            <IoCheckmarkCircleSharp className='text-slate-500' />
          )}
        </button>
        <button
          onClick={async () => {
            if (!window.confirm('¿Está seguro que quiere eliminar la tarea?'))
              return
            await deleteTask(task._id)
          }}
        >
          <IoTrashBin className='text-red-700' />
        </button>
      </div>
    </div>
  )
}

export default TaskItem
