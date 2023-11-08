import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import * as api from '../../../shared/api'
import { SignupDto, Tokens } from '../../../shared/api/generated/auth'
import { sessionModel } from '../../../entities/session'
export const useSignInMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (dto: SignupDto) =>
      (await api.auth.authControllerSigninLocal({ signupDto: dto })).data,
    onSuccess: (data: Tokens) => {
      Object.keys(data).forEach(key => {
        localStorage.setItem(key, data[key as keyof Tokens])
      })
      sessionModel.onLogin(data.access_token)
      navigate('..', { relative: 'path' })
    },
  })
}
