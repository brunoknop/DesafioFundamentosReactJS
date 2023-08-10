import logo from '../assets/rocket.svg';
import styles from './styles/Header.module.css'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={logo} alt="desenho de um foguete apontando para cima como se estivesse decolando" />
      <p>to<span>do</span></p>
    </header>
  )
}