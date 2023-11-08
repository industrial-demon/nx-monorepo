import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup } from './input-group'
import { SearchIcon } from '@webapp/icons'
import { useRef, useState } from 'react'

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
}

export default meta
type Story = StoryObj<typeof InputGroup>

const HookedInput = () => {
  const ref = useRef<null | HTMLInputElement>(null)

  const [updated, setUpdated] = useState('')

  return (
    <>
      <InputGroup
        placeholder="Search ..."
        onChange={e => setUpdated(e.target.value)}
        inputRef={ref}
        value={updated}
      >
        <InputGroup.Input />
        <InputGroup.Icon icon={<SearchIcon />} />
      </InputGroup>
      <button>Send</button>
    </>
  )
}

export const Default: Story = {
  render: () => <HookedInput />,
}
