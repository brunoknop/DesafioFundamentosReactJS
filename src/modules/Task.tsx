import { TaskInterface } from './TaskList.tsx'
import { Trash, Check } from '@phosphor-icons/react'

import styles from './styles/Task.module.css' 
import { FormEvent } from 'react'

interface TaskProps {
  task: TaskInterface,
  onDeleteTask: (id: string) => void
  onCheckTask: (id: string) => void
}

 export function Task({ task, onDeleteTask, onCheckTask}: TaskProps) {

  function handleDeleteTask(event: FormEvent) {
    event.preventDefault()
    onDeleteTask(task.id)
  }

  function handleCheckTask(event: FormEvent) {
    event.preventDefault()
    onCheckTask(task.id)
  }

  return (
    <form className={task.done ? styles.checkedContainer : styles.container}>
      <div className={styles.checkbox}>
        <button className={task.done ? styles.checkedIcon : styles.icon} onClick={handleCheckTask}>
          {
            task.done
            ? <Check size={10} weight="bold"/>
            : <p></p>
          }
        </button>
        <span className={task.done ? styles.checkedText : styles.text}>{task.message}</span>
      </div>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={18}/>
      </button>
    </form>
  )
}