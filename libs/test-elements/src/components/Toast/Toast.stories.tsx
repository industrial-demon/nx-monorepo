// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ToastContainer } from './controller';
import { toastControl, createToast } from './model/toast.store';
import { Button } from '../Button';
const meta: Meta<typeof ToastContainer> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Toast',
  component: ToastContainer,
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  render: () => {
    const toast = createToast();
    return (
      <>
        <Button
          onClick={() => toast.success('Utilities for controlling the stack order of an element.')}
        >
          Success
        </Button>

        <Button onClick={() => toast.error('Error')}> Error</Button>
        <ToastContainer control={toastControl} />
      </>
    );
  },
};
