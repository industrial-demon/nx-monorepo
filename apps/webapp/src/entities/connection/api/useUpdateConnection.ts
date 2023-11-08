import { useMutation, useQueryClient } from '@tanstack/react-query'

import { connectors } from '../../../shared/api/index'
import { ConnectionUpdateDto } from '../../../shared/api/generated/connectors'

export const useUpdateConnection = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['connection', 'update'],
    mutationFn: async ({ id, dto }: { id: string; dto: ConnectionUpdateDto }) =>
      await connectors.connections.connectionsControllerUpdateOne(
        {
          id,
          connectionUpdateDto: dto,
        },
      ).finally(()=> wait(4000)),
    onSuccess() {
      queryClient.invalidateQueries(['connections', 'list'])
    },
  })
}

const wait = (timeout: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), timeout)
  })
}
