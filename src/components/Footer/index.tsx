import styles from './Footer.module.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classNames from 'classnames'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'

export default function Footer() {

  const { theme } = useContext(ThemeContext)

  return (
    <section id='contact' className={styles.section}>
      <p className={classNames({
        [styles.title]: true,
        [styles[`title__${theme}`]]: true
      })}>
        Entre em contato!
      </p>
      <p className={classNames({
        [styles.title__subtitle]: true,
        [styles[`title__subtitle__${theme}`]]: true
      })}>
        Estou sempre a procura de novas oportunidades, me mande uma mensagem e a responderei assim que estiver disponível
      </p>
      <div>
        <ul className={styles.contatos__list}>
          <a href="https://github.com/DerrickPereira1998/" target="_blank" rel='noreferrer' className={classNames({
              [styles.contatos__list__link]: true,
              [styles[`contatos__list__link__${theme}`]]: true
            })}>
            <li className={classNames({
  [styles.contatos__list__listitem]: true,
  [styles[`contatos__list__listitem__${theme}`]]: true
})}>
              <div className={styles.contatos__list__flexcontent}>
                <div className={styles.contatos__list__listitem__listimage}>
                  <AiFillGithub size={60} />
                </div>
                <span className={styles.contatos__list__listtext}>
                  Github
                </span>
              </div>
              <div className={styles.contatos__list__listbottomtext}>
                Veja meus projetos
              </div>
            </li>
          </a>
          <a href="https://linkedin.com/in/derrickpereira1998" target="_blank" rel='noreferrer' className={classNames({
              [styles.contatos__list__link]: true,
              [styles[`contatos__list__link__${theme}`]]: true
            })}>
            <li className={classNames({
  [styles.contatos__list__listitem]: true,
  [styles[`contatos__list__listitem__${theme}`]]: true
})}>
              <div className={styles.contatos__list__flexcontent}>
                <div className={styles.contatos__list__listitem__listimage}>
                  <AiFillLinkedin size={60} />
                </div>
                <span className={styles.contatos__list__listtext}>
                  LinkedIn
                </span>
              </div>
              <div className={styles.contatos__list__listbottomtext}>
                Visite meu Linkedin
              </div>
            </li>
          </a>
        </ul>
        <div className={classNames({
          [styles.copyright]: true,
          [styles[`copyright__${theme}`]]: true
        })}>
          Copyright © 2023 Derrick Pereira
        </div>
      </div>
    </section>
  )
}
