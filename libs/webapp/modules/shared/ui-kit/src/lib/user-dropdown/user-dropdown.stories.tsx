import type { Meta, StoryObj } from '@storybook/react'
import { UserDropdown } from './user-dropdown'

const imgSrc =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
const meta: Meta<typeof UserDropdown> = {
  component: UserDropdown,
}

export default meta
type Story = StoryObj<typeof UserDropdown>

const Component = () => {
  return (
    <div className="pl-[300px]">
      <UserDropdown src={imgSrc} userNane="Joe Doe" />
    </div>
  )
}

export const ThemeSwitcherStory: Story = {
  render: () => <Component />,
}
