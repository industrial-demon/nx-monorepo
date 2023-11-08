// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeStory : Story = {
  args: {
    status: 'info',
    color: 'blue',
  },
};
