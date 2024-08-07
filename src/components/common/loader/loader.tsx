import css from './loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={css.loaderContainer} data-testid="loader-container">
      <div className={css.loader} data-testid="loader-element" />
    </div>
  )
}

export default Loader
