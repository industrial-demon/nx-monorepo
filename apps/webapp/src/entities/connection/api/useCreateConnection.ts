import { useMutation, useQueryClient } from '@tanstack/react-query'

import { connectors } from '../../../shared/api/index'
import { ConnectionCreateDto } from '../../../shared/api/generated/connectors'

export const useCreateConnection = ({
  onSuccess,
}: {
  onSuccess?: () => void
}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['connection', 'create'],
    mutationFn: async (dto: ConnectionCreateDto) =>
      await connectors.connections.connectionsControllerCreateOne({
        connectionCreateDto: dto,
      }),

    onSuccess() {
      queryClient.invalidateQueries(['connections', 'list'])
      onSuccess?.()
    },
  })
}
