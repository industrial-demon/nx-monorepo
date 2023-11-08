// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { AlertDialog } from './alert-dialog'
import { useState } from 'react'
import { Button } from '../button/button'

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
}

export default meta
type Story = StoryObj<typeof AlertDialog>

const HookedDialog = () => {
  const state = useState(false)
  return (
    <AlertDialog
      title="Custom Dialog"
      trigger={<Button>Dialog</Button>}
      open={state[0]}
      onOpenChange={state[1]}
    >
      <div className=" bg-red-300  p-2">dsfsdfs</div>
    </AlertDialog>
  )
}

export const Default: Story = {
  render: () => <HookedDialog />,
}
