import { useQuery } from '@tanstack/react-query'
import {users } from '../api'

export const useUsers = () => {
  return useQuery({
    queryKey: ['users', 'list'],
    queryFn: async () => await users.usersControllerFindAll(),
    staleTime: 4000
    })
}
