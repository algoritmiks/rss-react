import css from './spinner.module.css'

export const Spinner: React.FC = () => {
  return (
    <div className={css.container} role="container">
      <div className={css.spinner}></div>
    </div>
  )
}
