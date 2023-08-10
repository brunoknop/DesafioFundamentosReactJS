import styles from './styles/TaskList.module.css'
import { ClipboardText } from '@phosphor-icons/react'
import { Task } from './Task';

export interface TaskInterface {
  id: string;
  message: string;
  done: boolean
}

interface TaskListProps {
  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
}

export function TaskList({tasks, setTasks}: TaskListProps) {

  function deleteTask(id: string) {
    const taskListWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(taskListWithoutDeletedOne)
  }

  function checkTask(id: string){
    const taskChecked = tasks.find(task => task.id === id)
    if (taskChecked!.done) taskChecked!.done = false
    else taskChecked!.done = true
    const listTasksWithChekeds = tasks.map(task => {
      if (task.id === taskChecked!.id) return taskChecked!;
      else return task; 
    })
    setTasks(listTasksWithChekeds);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.createdTasks}>Tarefas criadas<span>{tasks.length}</span></p>
        <p className={styles.doneTasks}>Concluídas<span>{tasks.length === 0 ? "0" : tasks.filter(task => {return task.done}).length + " de " + tasks.length}</span></p>
      </header>
      {tasks.length > 0
      ? tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onCheckTask={checkTask}
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