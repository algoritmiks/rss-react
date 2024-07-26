import css from './loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loader} />
    </div>
  )
}

export default Loader
