import type { Meta, StoryObj } from '@storybook/react'
import { TabsFilter } from './tabs-filter'
import { TabFilterControl } from '@webapp/mobx-models'
import { ArchiveIcon } from '@radix-ui/react-icons'
import { BubblesIcon } from '@webapp/icons'
import { withRouter } from 'storybook-addon-react-router-v6'
import { NavLink } from 'react-router-dom'

const meta: Meta<typeof TabsFilter> = {
  component: TabsFilter,
  decorators: [withRouter],
}

export default meta
type Story = StoryObj<typeof TabsFilter>

const control = new TabFilterControl('')
export const NavPanelGreen: Story = {
  render: () => (
    <div className="flex gap-7">
      <TabsFilter control={control}>
        <TabsFilter.Item value="archived">
          <ArchiveIcon /> Archived
        </TabsFilter.Item>

        <TabsFilter.Item value="in_progress" asChild>
          <NavLink to="/connection">
            <BubblesIcon /> In progress
          </NavLink>
        </TabsFilter.Item>

      </TabsFilter>
    </div>
  ),
}
