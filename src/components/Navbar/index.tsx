import styles from './Navbar.module.scss'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'
import classnames from 'classnames'

export default function Navbar() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header className={styles[`header__${theme}`]}>
      <p className={classnames({
        [styles.logo]: true,
        [styles[`logo__${theme}`]]: true
      })}>DP</p>
      <nav>
        <ul className={styles.navlinks}>
          <li className={styles.navlinks__li}><a className={styles[`itens__${theme}`]} href="/">Sobre mim</a></li>
          <li className={styles.navlinks__li}><a className={styles[`itens__${theme}`]} href="/">Experiência</a></li>
          <li className={styles.navlinks__li}><a className={styles[`itens__${theme}`]} href="/">Projetos</a></li>
          <li className={styles.navlinks__li}><a className={styles[`itens__${theme}`]} href="/">Contato</a></li>
        </ul>
      </nav>
      <div className={styles.divfinal}>
        <a className={styles.contact} href="CurriculumVitae.pdf" download='Currículo - Derrick André'><button className={styles[`divfinal__contato__${theme}`]}>Baixar Currículo</button></a>
        <div className={styles.divfinal__modebutton}>
          {theme === 'dark'
            ? <MdLightMode color='#03DAC6' size={40} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            : <MdDarkMode color='black' size={40} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />}
        </div>
      </div>
    </header>
  )
} 