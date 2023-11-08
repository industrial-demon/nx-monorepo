import type { Meta, StoryObj } from '@storybook/react'
import { FilterByType } from './filter-by-type'

import {
  createFilterTypeItemControl,
  FilterByTypeListControl,
} from '@webapp/mobx-models'

const meta: Meta<typeof FilterByType> = {
  component: FilterByType,
  tags: ['filters']
}

export default meta
type Story = StoryObj<typeof FilterByType>

const filters = [
  createFilterTypeItemControl({
    title: 'All',
    name: 'All',
    id: 'AllTier',
    checked: true,
  }),
  createFilterTypeItemControl({
    title: 'Informatica Tier A Connectors',
    id: 'A',
    name: 'ATier',
  }),
  createFilterTypeItemControl({
    title: 'Informatica Tier B Connectors',
    name: 'B',
    id: 'BTier',
  }),
  createFilterTypeItemControl({
    title: 'Informatica Tier C Connectors',
    name: 'C',
    id: 'CTier',
  }),
  createFilterTypeItemControl({
    title: 'Informatica Tier D Connectors',
    name: 'D',
    id: 'DTier',
  }),
  createFilterTypeItemControl({
    title: 'Informatica Tier F Connectors',
    name: 'F',
    id: 'FTier',
  }),
]

const filterByTypesControl = new FilterByTypeListControl()
filters.forEach(filter => filterByTypesControl.addControl(filter))

export const Default: Story = {
  render: () => <FilterByType control={filterByTypesControl}></FilterByType>,
}
