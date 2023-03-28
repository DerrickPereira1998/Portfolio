import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'
import styles from './Presentation.module.scss'
import classNames from 'classnames'
import Projects from './Projects'

export default function Presentation() {

  const { theme } = useContext(ThemeContext)
  
  return(
    <section className={classNames({
      [styles.section]: true,
      [styles[`section__${theme}`]]: true
    })}>
      <Projects/>
    </section>
  )
};
