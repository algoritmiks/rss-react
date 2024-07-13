import css from './spinner.module.css'

export const Spinner: React.FC = () => {
  return (
    <div className={css.container} role="spinner">
      <div className={css.spinner}></div>
    </div>
  )
}
