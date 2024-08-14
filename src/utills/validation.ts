import { ValidationError } from 'yup'
import { validationSchema } from './validationSchema'
import { IFormFields } from '../types/types'

interface IValidation {
  isValid: boolean
  validatedData?: IFormFields
  errors: Record<string, string>
}

interface IFormData {
  [key: string]: string | number | boolean | undefined | null | FileList
}

export const validateForm = async (data: IFormData): Promise<IValidation> => {
  try {
    const validatedData = await validationSchema.validate(data, {
      abortEarly: false,
    })
    return {
      isValid: true,
      validatedData,
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
      return { isValid: false, errors }
    }

    return { isValid: false, errors: {} }
  }
}
