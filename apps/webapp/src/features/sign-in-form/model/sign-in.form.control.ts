import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { siginShema } from './sign-in.schema'
import { SignInValues } from './sign-in.values'

export const useSignInForm = () =>
  useForm<SignInValues>({
    resolver: zodResolver(siginShema),
    defaultValues: {
      password: '',
      email: '',
    },
  })
