import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import css from './controlled.module.css'

type Inputs = {
  example: string
  exampleRequired: string
}

export default function Controlled() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <>
      <nav>
        <Link className={css.link} to="/">
          <button className={css.btn}>Home</button>
        </Link>
        <Link className={css.link} to="/uncontrolled">
          <button className={css.btn}>Uncontrolled</button>
        </Link>
      </nav>
      <div>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit"
        */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register('example')} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('exampleRequired', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  )
}
