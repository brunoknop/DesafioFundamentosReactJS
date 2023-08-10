import styles from './styles/NewTask.module.css'
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewTaskProps {
  onNewTask: (message: string) => void
}

export function NewTask({ onNewTask }: NewTaskProps) {

  const [text, setText] = useState('');

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    onNewTask(text)
    setText('')
  }

  function handleAddText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <form className={styles.container} action="">
      <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa' onChange={handleAddText} value={text}/>
      <button type='submit' className={styles.button} onClick={handleNewTask}>
        criar
        <PlusCircle size={16} />  
      </button>
    </form>
  )
}