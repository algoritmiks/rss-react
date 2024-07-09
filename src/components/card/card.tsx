import { IPeople } from '../../ts/types'
import css from './card.module.css'

export const Card = ({ person }: { person: IPeople }) => {
  return (
    <div className={css.card}>
      <div className={css.name}>{person.name}</div>
      <p>Birth year: {person.birth_year}</p>
      <p>Height: {person.height}</p>
    </div>
  )
}
