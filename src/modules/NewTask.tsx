import styles from './styles/NewTask.module.css'
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

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

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewTaskEmpty = text.length === 0

  return (
    <form onSubmit={handleNewTask} className={styles.container} action="">
      <input
        className={styles.input}
        onChange={handleAddText}
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={text}
        onInvalid={handleInvalidTask}
        required
      />
      <button 
        type='submit'
        className={styles.button}
        disabled={isNewTaskEmpty}
      >
        criar
        <PlusCircle size={16} />  
      </button>
    </form>
  )
}