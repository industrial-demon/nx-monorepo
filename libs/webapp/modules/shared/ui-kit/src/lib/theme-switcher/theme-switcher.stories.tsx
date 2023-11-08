import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { ThemeSwitcher } from './theme-switcher'
import { useState } from 'react'

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  decorators: [withRouter],
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

const Component = () => {
  const [theme, setTeme] = useState<'dark' | 'light'>('dark')
  return (
    <div className="flex gap-7">
      <ThemeSwitcher
        theme={theme}
        toggleTheme={setTeme}
      />
    </div>
  )
}

export const ThemeSwitcherStory: Story = {
  render: () => <Component />,
}
