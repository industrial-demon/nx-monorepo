import { error } from 'console'
import { store } from '../../store/connections.store'
import { z, ZodError, ZodCatch } from 'zod'
import { createEffect, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

type ValidateFields = { name: string }

const shema = z.object<ValidateFields>({
  name: z.string().includes('t').nullable(),
})

const [validation, setValidation] = createStore<{
  errors?: ZodError['formErrors']
  isValid: boolean
}>({ isValid: false })

const validate = (value: string) => {
  createEffect(() => {
    try {
      shema.parse({ name: store.result?.[0]?.name || '' })
      setValidation('isValid', true)
    } catch (error) {
      console.log('FF')
      if (error instanceof ZodError) {
        setValidation('errors', error.formErrors)
        setValidation('isValid', false)
      }
    }
  })
}
export const SigInForm = () => {
  validate()

  return (
    <div>
      <h3>Form</h3>
      {store.result?.[0]?.name}
      {store.result?.[0]?.port}

      {validation.isValid ? validation.errors?.fieldErrors['name'] : null}
    </div>
  )
}
