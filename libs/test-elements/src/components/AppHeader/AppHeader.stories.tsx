import { Meta, StoryObj } from '@storybook/react';
import { AppHeader } from './AppHeader';
import * as UserMenuStories from '../UserMenu/UserMenu.stories';
import { UserMenu } from '../UserMenu';

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
};

export default meta;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    title: 'Default Panel',
    userMenu: (
      <UserMenu info={UserMenuStories.Default.args?.info}>
        {UserMenuStories.Default.args?.children}
      </UserMenu>
    ),
    children: (
      <>
        <AppHeader.Link to="/dashboard" title="Dashboard">
          <AppHeader.SubLink to="/dashboard/onboarding" title="Onboarding" />
          <AppHeader.SubLink to="/dashboard/extra" title="Extra" />
        </AppHeader.Link>

        <AppHeader.Link to="/users" title="Users" />
      </>
    ),
  },
};

export const ManyLinks: Story = {
  args: {
    title: 'Many Links Panel',
    userMenu: (
      <UserMenu info={UserMenuStories.Default.args?.info}>
        {UserMenuStories.Default.args?.children}
      </UserMenu>
    ),
    children: [...Array(20)].map((_, linkIndex) => (
      <AppHeader.Link key={linkIndex} to={`/link-${linkIndex}`} title={`Link ${linkIndex}`}>
        {[...Array(20)].map((_, subLinkIndex) => (
          <AppHeader.SubLink
            key={subLinkIndex}
            to={`/link-${linkIndex}/sub-link-${subLinkIndex}`}
            title={`Sub-link ${linkIndex}:${subLinkIndex}`}
          />
        ))}
      </AppHeader.Link>
    )),
  },
};
