import { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {
  args: {
    info: (
      <UserMenu.Info
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fullName="Michael Owen"
        notified
      />
    ),
    children: (
      <>
        <UserMenu.Button onClick={console.log}>Notifications</UserMenu.Button>
        <UserMenu.Button onClick={console.log}>Profile</UserMenu.Button>
        <UserMenu.Button onClick={console.log}>Logout</UserMenu.Button>
      </>
    ),
  },
};

export const Fallback: Story = {
  args: {
    info: <UserMenu.Info src="" fullName="Fallback" />,
    children: <UserMenu.Button onClick={console.log}>Notifications</UserMenu.Button>,
  },
};
