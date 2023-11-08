import { useMutation, useQueryClient } from '@tanstack/react-query'
import { connectors } from '../../../shared/api'
import { ConnectionsApiConnectionsControllerRemoveOneRequest } from '../../../shared/api/generated/connectors'

export const useDeleteConnectionMutate = ({
  onSuccess,
}: {
  onSuccess?: () => void
}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['delete-connection'],
    mutationFn: async (
      id: ConnectionsApiConnectionsControllerRemoveOneRequest['id'],
    ) =>
      await connectors.connections.connectionsControllerRemoveOne({id: id}),

    onSuccess: () => {
      queryClient.invalidateQueries(['connections'])
      onSuccess?.()
    },
  })
}
