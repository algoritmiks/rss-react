import React from 'react'
import { IPeople } from '../../ts/types'

class Card extends React.Component<{ person: IPeople }> {
  render() {
    return (
      <div>
        <h2>{this.props.person.name}</h2>
        <p>Birth year: {this.props.person.birth_year}</p>
        <p>Height: {this.props.person.height}</p>
      </div>
    )
  }
}

export default Card
