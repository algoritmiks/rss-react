import { useSelector } from 'react-redux'
import { TRootState } from '../../store/store'
import css from './cards.module.css'

export const Cards: React.FC = () => {
  const forms = useSelector((state: TRootState) => state.forms)

  if (forms.length === 0) return <h1>No forms loaded</h1>

  return (
    forms && (
      <div className={css.cards}>
        {forms.map((form, ind) => (
          <div className={css.card} key={ind}>
            <img className={css.img} src={form.img}></img>
            <span>Name: {form.name}</span>
            <span>Age: {form.age}</span>
            <span>e-mail: {form.email}</span>
            <span>password: {form.pwd}</span>
            <span>gender: {form.gender}</span>
            <span>country: {form.country}</span>
            <span>T&C: {form.tc ? 'accepted' : 'not accepted'}</span>
          </div>
        ))}
      </div>
    )
  )
}
