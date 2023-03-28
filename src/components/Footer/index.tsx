import styles from './Footer.module.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import classNames from 'classnames'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'

export default function Footer() {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={styles.section}>
      <div className={styles.contatos}>
        <ul className={styles.contatos__list}>
          <li className={styles.contatos__list__listitem}>
            <a className={styles.contatos__list__link} href="https://github.com/DerrickPereira1998/" target="_blank" rel='noreferrer'>
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
            </a>
          </li>
          <li className={styles.contatos__list__listitem}>
            <a className={styles.contatos__list__link} href="https://github.com/DerrickPereira1998/" target="_blank" rel='noreferrer'>
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
            </a>
          </li>
        </ul>
      </div>
      <div className={classNames({
            [styles.copyright]: true,
            [styles[`copyright__${theme}`]]: true
          })}>
        Copyright © 2023 Derrick Pereira
      </div>
    </section>
  )
}