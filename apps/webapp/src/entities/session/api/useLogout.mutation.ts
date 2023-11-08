import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import * as api from '../../../shared/api'
import { sessionModel } from '../model/session.model'

export const useLogoutMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['log-out'],
    mutationFn: async () => (await api.auth.authControllerLogout()).data,
    onSuccess: () => {
      sessionModel.onLogout()
      navigate('/sign-in', {replace: true})
    },
  })
}
