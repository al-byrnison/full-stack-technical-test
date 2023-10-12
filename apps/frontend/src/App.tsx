import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <div className='bg-zinc-900 text-white h-screen flex items-center justify-center'>
      <div className='bg-gray-950 p-4 w-5/6 sm:w-3/5 md:2/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>Tareas APP</h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
