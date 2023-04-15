import classNames from 'classnames'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRight'
import styles from './Projects.module.scss'

export default function Projects() {

  const { theme } = useContext(ThemeContext)

  return (
    <section id='projects' className={styles.section}>
      <h1 className={classNames({
        [styles.section__title]: true,
        [styles[`section__title__${theme}`]]: true
      })}>
        Projetos que criei
      </h1>
      <ProjectRight 
        imagem='images/Acerte_a_palavra.png'
        titulo='Jogo da forca'
        descricao='Jogo da forca criado com Javascript contendo a utilização da Web Speech API, possibilitando o jogo a ser jogado utilizando apenas o voz do jogador junto ao microfone do dispositivo'
        tags={['HTML','CSS','JavaScript','API']}
        gitlink='https://github.com/DerrickPereira1998/JogoDaForca'
        weblink='https://adivinhe-a-palavra.vercel.app/'
      />
      <ProjectLeft 
        imagem='images/Blog_de_postagens.png'
        titulo='Blog de posts'
        descricao='Projeto de crud criado com conexão a uma base de dados, cadastro de usuários criado utilizando a API passport'
        tags={['JavaScript','MongoDB', 'Express', 'Passport']}
        gitlink='https://github.com/DerrickPereira1998/BlogApp'
        weblink='https://blogapp-ylzt.onrender.com/'
      />
      <ProjectRight 
        imagem='images/Acerte_a_palavra.png'
        titulo='TrueTravek'
        descricao='Projeto de agendamento'
        tags={['HTML','CSS','JavaScript','API']}
        gitlink='/'
        weblink='/'
      />
    </section>
  )
};
