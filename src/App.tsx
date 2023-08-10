import { useState } from "react";
import { Header } from "./modules/Header";
import { NewTask } from "./modules/NewTask";
import { TaskList, TaskInterface } from "./modules/TaskList";
import { v4 as uuidv4 } from "uuid";

import styles from './App.module.css'

export function App() {

  const [tasks, setTasks] = useState([{
      id: uuidv4(),
      message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false
    },
    {
      id: uuidv4(),
      message: "corrigir os bugs gerados pela última publicação lançada no dia 24 de agosto",
      done: true
    }])

    function addNewTask(comment: string) {
    const newTask: TaskInterface = {
      id: uuidv4(),
      message: comment,
      done: false
    }
    console.log(newTask)
    setTasks([newTask, ...tasks])
  }

  const newTask = (task: string) => {
    addNewTask(task)
  }

  return (
    <div className={styles.generalContent}>
      <Header />
      <NewTask onNewTask={newTask}/>
      <TaskList 
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}
