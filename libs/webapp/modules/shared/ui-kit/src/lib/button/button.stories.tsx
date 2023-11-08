// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'
import { ImageIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    color: 'blue',
    children: 'Click',
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    color: 'violet',
    children: 'Button',
    filled: true,
    icon: <InstagramLogoIcon className="w-5 h-5" />,
  },
}

export const AsIcon: Story = {
  args: {
    color: 'red',
    asIcon: true,
    icon: <ImageIcon className="w-5 h-5" />,
  },
}
