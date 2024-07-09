import css from './cards.module.css'
import { Card } from '../card/card'
import { IPeople } from '../../ts/types'

export const Cards = ({ people }: { people: IPeople[] }) => {
  return (
    <div className={css.cards}>
      {people.map((person: IPeople) => {
        return <Card key={person.url} person={person} />
      })}
    </div>
  )
}
