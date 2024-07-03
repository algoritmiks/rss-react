import React from 'react'
import css from './loader.module.css'

class Loader extends React.Component {
  render() {
    return (
      <div className={css.loaderContainer}>
        <div className={css.loader} />
      </div>
    )
  }
}

export default Loader
