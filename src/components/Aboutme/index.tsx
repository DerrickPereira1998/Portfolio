import classNames from "classnames"
import { ThemeContext } from "context/themeContext"
import { useContext, useEffect } from 'react'
import styles from './Aboutme.module.scss'
import * as AOS from "aos"
import 'aos/dist/aos.css'

export default function AboutMe() {

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <section id='aboutme' data-aos='fade-up' className={styles.section}>
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
        <img src='images/myphoto.jfif' alt="Minha foto" className={classNames({
          [styles.section__content__image]: true,
          [styles[`section__content__image__${theme}`]]: true
        })}></img>
        <p className={classNames({
          [styles.section__content__text]: true,
          [styles[`section__content__text__${theme}`]]: true
        })}>
          Olá! Meu nome é Derrick e sou um desenvolvedor web apaixonado por criar soluções inovadoras e funcionais para problemas complexos. <br/><br/>
          
          Estudante de análise e desenvolvimento de sistemas com uma paixão por desenvolvimento de software em busca de novas oportunidades, estou disposto a me dedicar a aprender e a superar expectativas. <br/><br/>

          Possuo experiência profissional de um ano com desenvolvimento de software que adquiri através do meu cargo de Desenvolvedor Outsystems Junior durante meu período na Truewind, que também me proporcionou experiência com várias tecnologias (HTML, CSS JavaScript e SQL) especialmente na plataforma Outsystems. <br/><br/>
          
          Durante este período, estive em projetos nos quais ajudei no desenvolvimento de aplicações web e reactive, utilizando metodologias ágeis, como Scrum; Além de ferramentas como Jira e Azure. <br/><br/>

          Dedico meu tempo aprimorando minhas habilidades como desenvolvedor Front-end, focando em estudar: HTML, CSS, JavaScript, React e suas bibliotecas, enquanto aprimoro ainda mais meus conhecimentos em outras ferramentas como: Typescript, NodeJs, Python, SQL.
        </p>
      </div>
    </section>
  )
}