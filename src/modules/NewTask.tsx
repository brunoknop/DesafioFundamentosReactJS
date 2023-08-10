import styles from './styles/NewTask.module.css'
import { PlusCircle } from '@phosphor-icons/react';

export function NewTask() {
  return (
    <form className={styles.container} action="">
      <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa'/>
      <button className={styles.button}>
        criar
        <PlusCircle size={16} />  
      </button>
    </form>
  )
}