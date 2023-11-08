import { useQuery } from '@tanstack/react-query'
import qs from 'qs'

import { connectors } from '../../../shared/api/index'
import { ConnectionsApiConnectionsControllerFindAllRequest } from '../../../shared/api/generated/connectors'

export const useLoadConnections = (
  query: ConnectionsApiConnectionsControllerFindAllRequest,
) => {
  return useQuery({
    queryKey: ['connections', 'list', query],
    queryFn: async () =>
      /**
       * because Java client generator doesn't support deepObject in query
       * https://github.com/OpenAPITools/openapi-generator/issues/14691
       */
      (
        await connectors.connections.connectionsControllerFindAll(
          {},
          {
            params: {
              ...query,
            },
            paramsSerializer(params) {
              return qs.stringify(params, {
                encode: false,
                skipNulls: true,
                arrayFormat: 'brackets'
              })
            },
          },
        )
      ).data,
    staleTime: 5000,
    retry: 0,
  })
}
