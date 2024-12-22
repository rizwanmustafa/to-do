import './App.css'
import TaskList, {Task} from "./components/taskList"

function App() {
  const customTasks : Task[] = [
    {title: "Task 1", completed: false},
    {title: "Task 2", completed: true},
    {title: "Task 3", completed: false},
    {title: "Task 4", completed: true},
  ]


  return (
    <>
      <h1>Tasks</h1>
      <TaskList tasks={customTasks} />
    </>
  )
}

export default App
