import { useState } from 'react';
import './App.css'
import TaskList from "./components/TaskList";

function App() {
  const customTasks: MyTypes.Task[] = [
    { description: "Task 2", completed: true },
    { description: "Task 3", completed: false },
    { description: "Task 1", completed: false },
    { description: "Task 4", completed: true },
  ]


  const [tasks, setTasks] = useState<MyTypes.Task[]>(customTasks);


  const createTaskSetter = (tasks: MyTypes.Task[], setTasks: React.Dispatch<React.SetStateAction<MyTypes.Task[]>>) => {


    return (index: number, newTask: MyTypes.Task): void => {

      if (index < 0 || index >= tasks.length) { return; }


      console.log("I was called!");

      const newTasks = [...tasks];
      newTasks[index] = newTask;

      console.log(newTasks);
      setTasks(newTasks);
    }

  };


  const setTask = createTaskSetter(tasks, setTasks);


  return (
    <>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} setTask={setTask} />
    </>
  )
}

export default App
