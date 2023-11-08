// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './dialog'
import { useState } from 'react'
import { Button } from '../button/button'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

const HookedDialog = () => {
  const state = useState(false)
  return (
    <Dialog
      title="Custom Dialog"
      trigger={<Button>Dialog</Button>}
      open={state[0]}
      onOpenChange={state[1]}
    >
      <div className=" bg-red-300  p-2">dsfsdfs</div>
    </Dialog>
  )
}

export const Default: Story = {
  render: () => <HookedDialog />,
}
