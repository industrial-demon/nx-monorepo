import type { Meta, StoryObj } from '@storybook/react'
import { RangeFilter } from './range-filter'
import { RangeFilterControl } from '@webapp/mobx-models'

const meta: Meta<typeof RangeFilter> = {
  component: RangeFilter,
}

const control = new RangeFilterControl()

export default meta
type Story = StoryObj<typeof RangeFilter>

const HookedRangeFilter = () => {
  return (
    <RangeFilter
      heading="Filter by Time"
      unit="hrs"
      min={0}
      max={24}
      control={control}
    />
  )
}

export const Default: Story = {
  render: () => <HookedRangeFilter />,
}
