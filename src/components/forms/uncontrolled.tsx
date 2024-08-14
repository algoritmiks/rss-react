import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { validateForm } from '../../utills/validation'
import { TRootState } from '../../store/store'
import { addForm } from '../../store/reducers/forms'
import { fileReader } from '../../utills/fileReader'
import { IFormData } from '../../types/types'
import css from './forms.module.css'

export const Uncontrolled: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrorMessages] = useState<Record<string, string>>({})
  const [isShowPassword, setShowPassword] = useState(false)
  const countries = useSelector((state: TRootState) => state.countries)

  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const pwdRef = useRef<HTMLInputElement>(null)
  const pwdConfRef = useRef<HTMLInputElement>(null)
  const maleRef = useRef<HTMLInputElement>(null)
  const femaleRef = useRef<HTMLInputElement>(null)
  const countryRef = useRef<HTMLInputElement>(null)
  const imgRef = useRef<HTMLInputElement>(null)
  const tcRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      pwd: pwdRef.current?.value,
      pwdConfirm: pwdConfRef.current?.value,
      gender: maleRef.current?.checked
        ? 'male'
        : femaleRef.current?.checked
          ? 'female'
          : '',
      country: countryRef.current?.value,
      img: imgRef.current?.files,
      tc: tcRef.current?.checked,
    }

    const { isFormValid, validFormData, errors } = await validateForm(formData)

    if (isFormValid && validFormData) {
      const readerImage = formData.img ? await fileReader(formData.img[0]) : ''

      const validatedForm: IFormData = {
        name: validFormData.name,
        age: validFormData.age,
        email: validFormData.email,
        pwd: validFormData.pwd,
        pwdConfirm: validFormData.pwdConfirm,
        gender: validFormData.gender,
        country: validFormData.country,
        img: readerImage,
        tc: validFormData.tc ?? true,
      }

      dispatch(addForm(validatedForm))
      navigate('/')
    }
    setErrorMessages(errors)
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
        <Link className={css.link} to="/controlled">
          <button className={`${css.btn} ${css.navBtn}`}>Controlled</button>
        </Link>
      </nav>

      <div>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.inputContainer}>
            <label htmlFor="name">name</label>
            <input
              className={css.inp}
              autoComplete="on"
              type="text"
              id="name"
              ref={nameRef}
            />
            {errors.name && <span className={css.error}>{errors.name}</span>}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="age">age</label>
            <input
              className={css.inp}
              type="number"
              id="age"
              min="0"
              ref={ageRef}
            />
            {errors.age && <span className={css.error}>{errors.age}</span>}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="email">e-mail</label>
            <input
              className={css.inp}
              type="text"
              id="email"
              autoComplete="on"
              ref={emailRef}
            />
            {errors.email && <span className={css.error}>{errors.email}</span>}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="pwd">password</label>
            <input
              className={css.inp}
              type={isShowPassword ? 'text' : 'password'}
              id="pwd"
              ref={pwdRef}
            />
            <div className={css.showPwd} onClick={handleShowPassword}>
              👁
            </div>
            {errors.pwd && <span className={css.error}>{errors.pwd}</span>}
          </div>
          <div className={css.inputContainer}>
            <label htmlFor="pwdConf">password confirm</label>
            <input
              className={css.inp}
              type={isShowPassword ? 'text' : 'password'}
              id="pwdConf"
              ref={pwdConfRef}
            />
            <div className={css.showPwd} onClick={handleShowPassword}>
              👁
            </div>
            {errors.pwdConfirm && (
              <span className={css.error}>{errors.pwdConfirm}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <legend>gender</legend>
            <div className={css.radioContainer}>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  ref={maleRef}
                  id="male"
                />
                <label htmlFor="male">male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  ref={femaleRef}
                />
                <label htmlFor="female">female</label>
              </div>
            </div>
            {errors.gender && (
              <span className={css.error}>{errors.gender}</span>
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
              ref={countryRef}
            />
            <datalist id="countries">
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </datalist>
            {errors.country && (
              <span className={css.error}>{errors.country}</span>
            )}
          </div>

          <div className={css.inputContainer}>
            <label htmlFor="picture">image upload</label>
            <div className={css.imageContainer}>
              <input
                className={css.fileInp}
                type="file"
                id="picture"
                ref={imgRef}
              />
            </div>
            {errors.img && <span className={css.error}>{errors.img}</span>}
          </div>

          <div className={css.checkBoxContainer}>
            <div>
              <input type="checkbox" id="accept" ref={tcRef} />
              <label htmlFor="accept">accept T&C</label>
            </div>
            {errors.tc && (
              <span className={`${css.error} ${css.tcError}`}>{errors.tc}</span>
            )}
          </div>

          <button className={css.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  )
}
