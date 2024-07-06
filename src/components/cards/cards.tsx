import React from 'react'
import css from './cards.module.css'
import Card from '../card/card'
import { IPeople } from '../../ts/types'

class Cards extends React.Component<{ people: IPeople[] }> {
  render() {
    return (
      <div className={css.cards}>
        {this.props.people.map((person: IPeople) => {
          return <Card key={person.url} person={person} />
        })}
      </div>
    )
  }
}

export default Cards
