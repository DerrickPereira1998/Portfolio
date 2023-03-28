import classNames from 'classnames'
import { ThemeContext } from 'context/themeContext'
import { useContext } from 'react'
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRight'
import styles from './Projects.module.scss'

export default function Projects() {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={styles.section}>
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
        gitlink='/'
        weblink='/'
      />
      <ProjectLeft 
        imagem='images/Acerte_a_palavra.png'
        titulo='Jogo da forca'
        descricao='Jogo da forca criado com Javascript contendo a utilização da Web Speech API, possibilitando o jogo a ser jogado utilizando apenas o voz do jogador junto ao microfone do dispositivo'
        tags={['HTML','CSS','JavaScript','API']}
        gitlink='/'
        weblink='/'
      />
      <ProjectRight 
        imagem='images/Acerte_a_palavra.png'
        titulo='Jogo da forca'
        descricao='Jogo da forca criado com Javascript contendo a utilização da Web Speech API, possibilitando o jogo a ser jogado utilizando apenas o voz do jogador junto ao microfone do dispositivo'
        tags={['HTML','CSS','JavaScript','API']}
        gitlink='/'
        weblink='/'
      />
    </section>
  )
};
