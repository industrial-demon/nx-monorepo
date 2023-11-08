import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'
import { useRef } from 'react'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

const HookedCheckbox = () => {
  const ref = useRef<null | HTMLButtonElement>(null)
  return (
    <div className="flex p-1 h-screen">
      <Checkbox ref={ref} />
    </div>
  )
}

export const Default: Story = {
  render: () => <HookedCheckbox />,
}
