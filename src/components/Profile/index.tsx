import styles from './Profile.module.scss'
import { ThemeContext } from 'context/themeContext'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import * as AOS from "aos"
import 'aos/dist/aos.css'

export default function Profile() {
  
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({duration: 2000})
  }) 

  return (
    <section id='home' className={classNames({
      [styles.section]: true,
      [styles[`section__${theme}`]]: true
    })}>
      <div></div>
      <div data-aos='fade-right' className={classNames({
        [styles.section__title]: true,
        [styles[`section__title__${theme}`]]: true
      })}>
        Derrick Pereira
      </div>
      <div data-aos='fade-right' className={classNames({
        [styles.section__description]: true,
        [styles[`section__description__${theme}`]]: true
      })}>
        Desenvolvedor web e estudante de análise e desenvolvimento de sistemas
      </div>
      <img src='images/Foto_de_capa.png' data-aos='fade-left' alt='Foto de capa' className={classNames({
        [styles.section__image]: true,
        [styles[`section__image__${theme}`]]: true
      })} />
    </section>
  )
};
