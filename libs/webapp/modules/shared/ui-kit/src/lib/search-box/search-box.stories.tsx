import type { Meta, StoryObj } from '@storybook/react'
import { SearchBox } from './search-box'
import { useState } from 'react'

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  tags: ['filters'],
}

export default meta
type Story = StoryObj<typeof SearchBox>

const HookedSearchBox = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <SearchBox entityName="Tasks" value={state} onSearch={setState} />
    </div>
  )
}

export const Default: Story = {
  render: () => <HookedSearchBox />,
}
