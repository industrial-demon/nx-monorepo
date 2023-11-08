// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
  render: () => {
    return <Select options={[]} loading={true} />;
  },
};
