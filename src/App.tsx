import { useState } from "react";
import { Header } from "./modules/Header";
import { NewTask } from "./modules/NewTask";
import { TaskList, TaskInterface } from "./modules/TaskList";
import { v4 as uuidv4 } from "uuid";

import styles from './App.module.css'

export function App() {

  const [tasks, setTasks] = useState(Array<TaskInterface>)

    function addNewTask(comment: string) {
    const newTask: TaskInterface = {
      id: uuidv4(),
      message: comment,
      done: false
    }
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
