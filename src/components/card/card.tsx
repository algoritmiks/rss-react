import React from 'react'
import { IPeople } from '../../ts/types'
import css from './card.module.css'

class Card extends React.Component<{ person: IPeople }> {
  render() {
    return (
      <div className={css.card}>
        <div className={css.name}>{this.props.person.name}</div>
        <p>Birth year: {this.props.person.birth_year}</p>
        <p>Height: {this.props.person.height}</p>
      </div>
    )
  }
}

export default Card
