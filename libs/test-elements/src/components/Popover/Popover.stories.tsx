// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full justify-center">
      <Popover trigger={<Button>Filters</Button>} closeIcon>
        <div className="h-[400px] w-[500px] bg-slate-200">content</div>
      </Popover>
    </div>
  ),
};
