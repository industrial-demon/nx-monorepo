import type { Meta, StoryObj } from '@storybook/react'
import { IconJarLogoIcon, ImageIcon } from '@radix-ui/react-icons'

import { NavigationMenu } from './navigation-menu'
const meta: Meta<typeof NavigationMenu> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: NavigationMenu,
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Horizontal: Story = {
  render: () => {
    return (
      <div className="w-screen h-screen bg-violet-300 flex">
        <NavigationMenu
          orientation="vertical"
          createStyles={()=>({
            root: "bg-slate-300",
            list: 'p-2 w-52  bg-gray-600',
          })}
        >
          <NavigationMenu.Item>Dashboard</NavigationMenu.Item>
          <NavigationMenu.Item>Settings</NavigationMenu.Item>
          <NavigationMenu.Item>Moniotor</NavigationMenu.Item>
          <NavigationMenu.Item>Connections</NavigationMenu.Item>
        </NavigationMenu>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    return (
      <div className="w-screen h-screen bg-violet-300 flex">
        <NavigationMenu>
          <NavigationMenu.Item>Dashboard</NavigationMenu.Item>
          <NavigationMenu.Item>Settings</NavigationMenu.Item>
          <NavigationMenu.Item>Moniotor</NavigationMenu.Item>
          <NavigationMenu.Item>Connections</NavigationMenu.Item>
        </NavigationMenu>
      </div>
    )
  },
}
