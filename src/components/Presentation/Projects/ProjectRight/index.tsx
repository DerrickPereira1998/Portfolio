import classNames from 'classnames'
import { ThemeContext } from 'context/themeContext'
import styles from './ProjectRight.module.scss'
import { useContext } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'

interface Props {
  imagem: String,
  titulo: String,
  descricao: String,
  tags: String[],
  gitlink: String,
  weblink: String
}

export default function ProjectRight({imagem, titulo, descricao, tags, gitlink, weblink }: Props) {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.back}>
      <img src={`${imagem}`} alt='Foto do projeto acerte a palavra' className={styles.back__img}></img>
      <div className={styles.back__content}>
        <h1 className={classNames({
          [styles.back__content__titulo]: true,
          [styles[`back__content__titulo__${theme}`]]: true
        })}> {titulo} </h1>
        <div className={classNames({
          [styles.back__content__square]: true,
          [styles[`back__content__square__${theme}`]]: true
        })}>
          <p>{descricao}</p>
        </div>
        <ul className={styles.back__list}>
          {tags.map((tag, index) => (
            <li key={index} className={classNames({
              [styles.back__list__item]: true,
              [styles[`back__list__item__${theme}`]]: true
            })}>
              {tag}
            </li>
          ))}
        </ul>
        <div className={classNames({
          [styles.link]: true,
          [styles[`link__${theme}`]]: true
        })}>
          <a href={`${gitlink}`} target='_blank' rel="noreferrer" className={classNames({
            [styles.link__spacing]: true,
            [styles[`link__spacing__${theme}`]]: true
          })}>
            <FiGithub />
          </a>
          <a href={`${weblink}`} target='_blank' rel="noreferrer" className={classNames({
            [styles.link__spacing]: true,
            [styles[`link__spacing__${theme}`]]: true
          })}>
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  )
};
