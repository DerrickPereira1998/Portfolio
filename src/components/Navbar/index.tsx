import styles from './Navbar.module.scss'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'
import classnames from 'classnames'
import {Link} from 'react-scroll'

export default function Navbar() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (

    <header className={classnames({
      [styles.header]: true,
      [styles[`header__${theme}`]]: true
    })}>
      <Link to='home' smooth={true} duration={800} className={classnames({
        [styles.logo]: true,
        [styles[`logo__${theme}`]]: true
      })}>
        DP
      </Link>
      <nav>
        <ul className={styles.navlinks}>
          <li className={styles.navlinks__li}><Link className={styles[`itens__${theme}`]} to='aboutme' smooth={true} offset={-152} duration={800}>Sobre mim</Link></li>
          <li className={styles.navlinks__li}><Link className={styles[`itens__${theme}`]} to='experiences' smooth={true} offset={-160} duration={1000}>Experiência</Link></li>
          <li className={styles.navlinks__li}><Link className={styles[`itens__${theme}`]} to='projects' smooth={true} offset={-80} duration={800}>Projetos</Link></li>
          <li className={styles.navlinks__li}><Link className={styles[`itens__${theme}`]} to='contact' smooth={true} duration={800}>Contato</Link></li>
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