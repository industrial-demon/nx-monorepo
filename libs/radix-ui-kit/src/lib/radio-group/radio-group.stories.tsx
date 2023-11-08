// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RadioGroup',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  render: () => (
    <RadioGroup
      defaultValue="test-2"
      size="md"
      color="blue"
      className="flex gap-2 border border-slate-200  bg-slate-300 p-2 "
    >
      <div>
        <RadioGroup.Item value={'test-1'} />
      </div>

      <RadioGroup.Item value={'test-2'}  />
      <RadioGroup.Item value={'test-3'} />
    </RadioGroup>
  ),
};
