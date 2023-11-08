// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  {
    title: 'Inbox',
    value: 'tab1',
    render: () => <div className="bg-red-200 p-2"> szdsad</div>,
  },
  {
    title: 'Today',
    value: 'tab2',
    render: () => <div className="bg-green-200 p-2"> TOday</div>,
  },
  {
    title: 'What?',
    value: 'tab3',
    render: () => <div className="bg-green-200 p-2">What</div>,
  },
];

export const Default: Story = {
  render: () => <Tabs tabs={tabs} tabVariant="black" contentStyle="p-2" />,
};
