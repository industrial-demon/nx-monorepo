import { createFilterTypeItemControl } from '@webapp/mobx-models'

export const filters: Array<Parameters<typeof createFilterTypeItemControl>[0]> =
  [
    {
      title: 'All',
      name: 'All',
      id: 'AllTier',
      checked: true,
    },
    {
      title: 'Informatica Tier A Connectors',
      id: 'A',
      name: 'ATier',
    },
    {
      title: 'Informatica Tier B Connectors',
      name: 'B',
      id: 'BTier',
    },
    {
      title: 'Informatica Tier C Connectors',
      name: 'C',
      id: 'CTier',
    },
    {
      title: 'Informatica Tier D Connectors',
      name: 'D',
      id: 'DTier',
    },
    {
      title: 'Informatica Tier F Connectors',
      name: 'F',
      id: 'FTier',
    },
  ]
