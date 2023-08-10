import { useState } from 'react'
import styles from './styles/TaskList.module.css'
import { ClipboardText } from '@phosphor-icons/react'
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

export interface TaskInterface {
  id: string;
  message: string;
  done: boolean
}

export function TaskList() {

  const [tasks, setTasks] = useState(
    [{
      id: "1",
      message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false
    },
    {
      id: "2",
      message: "corrigir os bugs gerados pela última publicação lançada no dia 24 de agosto",
      done: true
    }]
  )

  function deleteTask(id: string) {
    const taskListWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(taskListWithoutDeletedOne)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.createdTasks}>Tarefas criadas<span>0</span></p>
        <p className={styles.doneTasks}>Concluídas<span>0</span></p>
      </header>
      {tasks.length > 0
      ? tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
          />
        ) 
      })
      : <div className={styles.messageWithoutTask}>
        <ClipboardText size={56} weight="thin"/>
        <div className={styles.textContent}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>}
    </div>
  )
}