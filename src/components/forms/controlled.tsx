import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '../../utills/validationSchema'
import { TRootState } from '../../store/store'
import { addForm } from '../../store/reducers/forms'
import { fileReader } from '../../utills/fileReader'
import { IFormData, IFormFields } from '../../types/types'
import css from './forms.module.css'

export const Controlled: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowPassword, setShowPassword] = useState(false)
  const countries = useSelector((state: TRootState) => state.countries)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  })

  const handleFormSubmit = async (formData: IFormFields) => {
    const readerImage = formData.img ? await fileReader(formData.img[0]) : ''

    const validatedForm: IFormData = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      pwd: formData.pwd,
      pwdConfirm: formData.pwdConfirm,
      gender: formData.gender,
      country: formData.country,
      img: readerImage,
      tc: formData.tc ?? true,
    }

    dispatch(addForm(validatedForm))
    navigate('/')
  }

  const handleShowPassword = () => {
    setShowPassword((showPwd) => !showPwd)
  }

  return (
    <>
      <nav className={css.navigation}>
        <Link className={css.link} to="/">
          <button className={`${css.btn} ${css.navBtn}`}>Home</button>
        </Link>
        <Link className={css.link} to="/uncontrolled">
          <button className={`${css.btn} ${css.navBtn}`}>Uncontrolled</button>
        </Link>
      </nav>

      <div>
        <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={css.inputContainer}>
            <label htmlFor="name">name</label>
            <input
              className={css.inp}
              autoComplete="on"
              type="text"
              id="name"
              {...register('name')}
            />
            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="age">age</label>
            <input
              className={css.inp}
              type="number"
              id="age"
              min="0"
              {...register('age')}
            />
            {errors.age && (
              <span className={css.error}>{errors.age.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="email">e-mail</label>
            <input
              className={css.inp}
              type="text"
              id="email"
              autoComplete="on"
              {...register('email')}
            />
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="pwd">password</label>
            <input
              className={css.inp}
              type={isShowPassword ? 'text' : 'password'}
              id="pwd"
              {...register('pwd')}
            />
            <div className={css.showPwd} onClick={handleShowPassword}>
              👁
            </div>
            {errors.pwd && (
              <span className={css.error}>{errors.pwd.message}</span>
            )}
          </div>
          <div className={css.inputContainer}>
            <label htmlFor="pwdConf">password confirm</label>
            <input
              className={css.inp}
              type={isShowPassword ? 'text' : 'password'}
              id="pwdConf"
              {...register('pwdConfirm')}
            />
            <div className={css.showPwd} onClick={handleShowPassword}>
              👁
            </div>
            {errors.pwdConfirm && (
              <span className={css.error}>{errors.pwdConfirm.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <legend>gender</legend>
            <div className={css.radioContainer}>
              <div>
                <input
                  type="radio"
                  value="male"
                  {...register('gender')}
                  id="male"
                />
                <label htmlFor="male">male</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="female"
                  id="female"
                  {...register('gender')}
                />
                <label htmlFor="female">female</label>
              </div>
            </div>
            {errors.gender && (
              <span className={css.error}>{errors.gender.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="country">country</label>
            <input
              autoComplete="on"
              className={css.inp}
              type="text"
              id="country"
              list="countries"
              {...register('country')}
            />
            <datalist id="countries">
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </datalist>
            {errors.country && (
              <span className={css.error}>{errors.country.message}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="picture">image upload</label>
            <div className={css.imageContainer}>
              <input
                className={css.fileInp}
                type="file"
                id="picture"
                {...register('img')}
              />
            </div>
            {errors.img && (
              <span className={css.error}>{errors.img.message}</span>
            )}
          </div>

          <div className={css.checkBoxContainer}>
            <div>
              <input type="checkbox" id="accept" {...register('tc')} />
              <label htmlFor="accept">accept T&C</label>
            </div>
            {errors.tc && (
              <span className={`${css.error} ${css.tcError}`}>
                {errors.tc.message}
              </span>
            )}
          </div>

          <button className={css.btn} type="submit" disabled={!isValid}>
            submit
          </button>
        </form>
      </div>
    </>
  )
}
