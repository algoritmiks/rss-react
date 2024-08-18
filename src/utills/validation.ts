import { ValidationError } from 'yup'
import { validationSchema } from './validationSchema'
import { IFormFields } from '../types/types'

interface IFormValidation {
  isFormValid: boolean
  validFormData?: IFormFields
  errors: Record<string, string>
}

interface IFormData {
  [key: string]: string | number | boolean | undefined | null | FileList
}

export const validateForm = async (
  data: IFormData,
): Promise<IFormValidation> => {
  try {
    const validFormData = await validationSchema.validate(data, {
      abortEarly: false,
    })
    return {
      isFormValid: true,
      validFormData,
      errors: {},
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      const errors: Record<string, string> = {}

      error.inner.forEach((err) => {
        if (typeof err.path === 'string') {
          errors[err.path] = err.message
        }
      })
      return { isFormValid: false, errors }
    }

    return { isFormValid: false, errors: {} }
  }
}
