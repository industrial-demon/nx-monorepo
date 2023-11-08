import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { NavPanel } from './nav-panel'
import {
  AdminIcon,
  ConnectionsIcon,
  DashboardIcon,
  ManageIcon,
  MonitorIcon,
} from '@webapp/icons'

const meta: Meta<typeof NavPanel> = {
  component: NavPanel,
  decorators: [withRouter],
}

export default meta
type Story = StoryObj<typeof NavPanel>

export const NavPanelGreen: Story = {
  render: () => (
    <div className="flex gap-7">
      <NavPanel
        routes={[
          {
            to: 'dashboard',
            title: 'Dashboard',
            icon: <DashboardIcon />,
          },
          { to: 'manage', title: 'Manage', icon: <ManageIcon /> },
          { to: 'monitor', title: 'Monitor', icon: <MonitorIcon /> },
          {
            to: 'connections',
            title: 'Connections',
            icon: <ConnectionsIcon />,
          },
          { to: 'admin', title: 'Admin', icon: <AdminIcon /> },
        ]}
      />
    </div>
  ),
}
