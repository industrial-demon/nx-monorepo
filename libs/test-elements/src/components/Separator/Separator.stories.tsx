// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Separator',
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Separ: Story = {
  args: {
    orientation: 'horizontal',
  },
};
