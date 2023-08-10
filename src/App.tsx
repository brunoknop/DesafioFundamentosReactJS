import { Header } from "./modules/Header";
import { NewTask } from "./modules/NewTask";
import { TaskList } from "./modules/TaskList";

import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.generalContent}>
      <Header />
      <NewTask />
      <TaskList />
    </div>
  )
}
