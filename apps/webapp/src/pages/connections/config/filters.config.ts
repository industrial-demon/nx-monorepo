import { createFilterTypeItemControl } from '@webapp/mobx-models'
import { ConnectionEntityTypeEnum } from '../../../shared/api/generated/connectors'

export const typeFilters: Array<
  ReturnType<typeof createFilterTypeItemControl>
> = [
  createFilterTypeItemControl({
    title: 'All',
    name: 'ALL',
    id: 'ALL',
    checked: true,
  }),
  ...Object.values(ConnectionEntityTypeEnum).map(connectionType =>
    createFilterTypeItemControl({
      id: connectionType,
      name: connectionType,
      title: connectionType,
    }),
  ),
]
