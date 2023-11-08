import type { Meta, StoryObj } from '@storybook/react'
import { ActionDropdown } from './action-dropdown'
import { CrossIcon, PencilIcon } from '@webapp/icons'
import { Dialog } from '../dialog'
import { useState } from 'react'

const imgSrc =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
const meta: Meta<typeof ActionDropdown> = {
  component: ActionDropdown,
}

export default meta
type Story = StoryObj<typeof ActionDropdown>

const Component = () => {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const onSelectItem = () => (open: boolean) => {
    setOpen(open)
  }
  return (
    <>
      <div className="pl-[300px]">
        <ActionDropdown
          open={openDropdown}
          onOpenChange={setOpenDropdown}
          actions={[
            {
              title: 'Edit',
              icon: <PencilIcon />,
              onAction: e => {
                e.preventDefault()
                setOpen(true)
              },
            },
            {
              title: 'Delete',
              icon: <CrossIcon />,
              onAction: () => console.log(a),
            },
          ]}
        />
      </div>
      <Dialog open={open} onOpenChange={onSelectItem()}>
        DIALOG
      </Dialog>
    </>
  )
}

export const ThemeSwitcherStory: Story = {
  render: () => <Component />,
}
