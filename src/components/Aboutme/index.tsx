import classNames from "classnames"
import { ThemeContext } from "context/themeContext"
import { useContext } from 'react'
import styles from './Aboutme.module.scss'

export default function AboutMe() {

  const { theme } = useContext(ThemeContext)

  return (
    <section>
      <h1 className={classNames({
        [styles.section__title]: true,
        [styles[`section__title__${theme}`]]: true
      })}>
        Sobre mim
      </h1>
      <div className={classNames({
        [styles.section__content]: true,
        [styles[`section__content__${theme}`]]: true
      })}>
        <img alt="Minha foto" className={classNames({
        [styles.section__content__image]: true,
        [styles[`section__content__image__${theme}`]]: true
      })}></img>
        <p className={classNames({
        [styles.section__content__text]: true,
        [styles[`section__content__text__${theme}`]]: true
      })}>
        aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaa aaaaaaaaaa
        aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaa aaaaaaaaaa
        aaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaa aaaaaaaaaa
      </p>
      </div>
    </section>
  )
}