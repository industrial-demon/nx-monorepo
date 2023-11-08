import type { Meta, StoryObj } from '@storybook/react'
import { ToggleFilter } from './toggle-filter'
import { ToggleGroupControl } from '@webapp/mobx-models'
import { ChartIcon, ClockIcon } from '@webapp/icons'

const meta: Meta<typeof ToggleFilter> = {
  component: ToggleFilter,
}

const control = new ToggleGroupControl()
control.add('summary')
control.add('scheduled')
export default meta
type Story = StoryObj<typeof ToggleFilter>

const HookedToggleFilter = () => {
  return (
    <ToggleFilter
      control={control}
      filters={[
        {
          id: '11',
          value: 'summary',
          title: 'Summary',
          icon: <ChartIcon className="w-5" />,
        },
        {
          id: '12',
          value: 'scheduled',
          title: 'Scheduled',
          icon: <ClockIcon className="w-5" />,
        },
      ]}
      entityName={'Tasks'}
    />
  )
}

export const Default: Story = {
  render: () => <HookedToggleFilter />,
}
