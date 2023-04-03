import styles from './Profile.module.scss'
import { ThemeContext } from 'context/themeContext'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
//import AOS from 'aos'
//import 'aos/dist/aos.css'

export default function Profile() {
  
  const { theme } = useContext(ThemeContext)

  //useEffect(() => {
    //  AOS.init({duration: 2000})
  //}) data-aos='fade-up'

  return (
    <section className={classNames({
      [styles.section]: true,
      [styles[`section__${theme}`]]: true
    })}>
      <div></div>
      <div className={classNames({
        [styles.section__title]: true,
        [styles[`section__title__${theme}`]]: true
      })}>
        Derrick Pereira
      </div>
      <div className={classNames({
        [styles.section__description]: true,
        [styles[`section__description__${theme}`]]: true
      })}>
        Desenvolvedor web e estudante de analise e desenvolvimento de sistemas
      </div>
      <img alt='Foto de capa' className={classNames({
        [styles.section__image]: true,
        [styles[`section__image__${theme}`]]: true
      })} />
      <div className={classNames({
        [styles.contato]: true,
        [styles[`contato__${theme}`]]: true
      })}>
      
        Contatos

        <a href='/' className={classNames({
          [styles.contato__item]: true,
          [styles[`contato__item__${theme}`]]: true
        })}>
          <FiGithub/>
        </a>
        <a href='/' className={classNames({
          [styles.contato__item]: true,
          [styles[`contato__item__${theme}`]]: true
        })}>
          <FiLinkedin/>
        </a>
      </div>
    </section>
  )
};