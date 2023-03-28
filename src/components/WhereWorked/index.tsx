import { ThemeContext } from 'context/themeContext'
import { useContext, useState } from 'react'
import styles from './WhereWorked.module.scss'
import classNames from 'classnames'
import experiences from './experiences.json'

interface Valores{
  title: string
  description: string
  id: string
}

interface Valores{
  title: string
  description: string
  id: string
}

export default function WhereWorked() {

  const { theme } = useContext(ThemeContext)

  const [experience, setExperience] = useState<Valores>(
    experiences[0]
  );

  function selecionarItem(opcao: any){
    return setExperience(opcao);
  }

  return (
    <section>
      <h1 className={classNames({
        [styles.section__title]: true,
        [styles[`section__title__${theme}`]]: true
      })}>
        Minhas experiências
      </h1>
      <div className={classNames({
        [styles.display]: true,
        [styles[`display__${theme}`]]: true
      })}>
        <div className={classNames({
          [styles.display__options]: true,
          [styles[`display__options__${theme}`]]: true
        })}>
          {experiences.map((opcao) => (
            <button 
              key={opcao.id} 
              className={classNames({
                [styles.display__options__button]: true,
                [styles[`display__options__button__${theme}`]]: true,
                [styles[`display__options__button__active`]]: experience.id === opcao.id
                })}
              onClick={() => selecionarItem(opcao)}
            >
              {opcao.title}
            </button>
          ))}
        </div>
        <div className={classNames({
          [styles.display__content]: true,
          [styles[`display__content__${theme}`]]: true
        })}>
          <p className={classNames({
          [styles.display__content__text]: true,
          [styles[`display__content__text__${theme}`]]: true
        })}>
            {experience.description}
          </p>
        </div>
      </div>
    </section>
  )
};
