import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('name required')
    .matches(/^[A-Z]/, 'first letter should be uppercase'),
  age: yup
    .number()
    .required('age required')
    .integer('age should be an integer')
    .positive('age should be a positive number'),
  email: yup
    .string()
    .required('email required')
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
      'invalid email',
    ),
  pwd: yup
    .string()
    .required('password required')
    .matches(/^(?=.*[A-ZА-Я])/, 'password should contain one uppercase letter')
    .matches(/^(?=.*[a-zа-я])/, 'password should contain one lowercase letter')
    .matches(/^(?=.*[0-9])/, 'password should contain one number')
    .matches(
      /^(?=.*[!@#%&$^*()?<>|+=])/,
      'password should contain one special symbol',
    ),
  pwdConfirm: yup
    .string()
    .required('password confirmation required')
    .oneOf([yup.ref('pwd')], 'passwords should match'),
  gender: yup.string().required('gender is required'),
  country: yup.string().required('country required'),
  img: yup
    .mixed<FileList>()
    .test('img', 'image required', (file) => Boolean(file))
    .test('img type', 'image should be jpeg or png', (files) => {
      if (!files || !files[0]) {
        return false
      }
      return files[0].type === 'image/jpeg' || files[0].type === 'image/png'
    })
    .test('img size', 'image size should be less than 500kb', (files) => {
      if (!files || !files[0]) {
        return false
      }
      return files[0].size <= 512000
    }),
  tc: yup
    .boolean()
    .test('tc accepted', 'T&C should be accepted', (checked) => checked),
})
