import { TaskInterface } from './TaskList.tsx'
import { Trash, Check } from '@phosphor-icons/react'

import styles from './styles/Task.module.css' 

interface TaskProps {
  task: TaskInterface,
  onDeleteTask: (id: string) => void
}

 export function Task({ task, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    event?.preventDefault();
    onDeleteTask(task.id)
  }

  return (
    <form className={styles.container}>
      <div className={styles.checkbox}>
        <button className={task.done ? styles.checkedIcon : styles.Icon}>
          {
            task.done
            ? <Check size={10} weight="bold"/>
            : <p></p>
          }
        </button>
        <span className={styles.checkboxText}>{task.message}</span>
      </div>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={18}/>
      </button>
    </form>
  )
}