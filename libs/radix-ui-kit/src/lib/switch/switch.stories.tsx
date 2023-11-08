import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './switch'
import { IconJarLogoIcon, } from '@radix-ui/react-icons'

const meta: Meta<typeof Switch> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Switch',
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex gap-7">
      <Switch size='lg'/>
      <Switch>
        <IconJarLogoIcon className="h-7 w-7" />
      </Switch>
      <Switch disabled />
    </div>
  ),
}
