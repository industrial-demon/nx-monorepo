import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { ConnectionCreateValues } from './connection-create.values'
import { sessionModel } from '../../../entities/session'
import { connectionCreateShema } from './connection-create.schema'

export const useCreateConnectionForm = () =>
  useForm<ConnectionCreateValues>({
    resolver: zodResolver(connectionCreateShema),
    defaultValues: {
      name: '',
      database: '',
      type: '',
      username: sessionModel.user ? sessionModel.user.name + sessionModel.user.lastName : '',
      description: '',
    },
  })
