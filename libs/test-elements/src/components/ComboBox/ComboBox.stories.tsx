// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox, ComboBoxProps } from './ComboBox';
import { Tabs } from '../Tabs';
import { useState } from 'react';
import { Dialog } from '../Dialog';

const meta: Meta<typeof ComboBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Combobox',
  component: ComboBox,
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Primary: Story = {
  render: () => {
    const options: ComboBoxProps['options'] = [
      { value: '7', label: 'jjj', 3: 'kkkk' },
      { value: '5', label: 'Red' },
      { value: '2', label: 'Blue' },
      { value: '3', label: 'Green' },
      { value: '4', label: 'Disabled', disabled: true },
      {
        value: 'custom',
        label: 'Custom',
        render: props => <span className="h-8 p-8 text-red-600">{props.label} </span>,
      },
    ];

    return (
      <div className="">
        <button> Clear </button>
        <div className="my-1 h-40 w-full bg-green-200 p-3"> Test</div>
        <ComboBox options={options} onInputChange={e => console.log(e)} />
      </div>
    );
  },
};

function StateComboBox() {
  const [state, setState] = useState('');

  const [open, setOpen] = useState(false);

  const options: ComboBoxProps['options'] = [
    { value: '7', label: 'jjj', 3: 'kkkk' },
    { value: '5', label: 'Red' },
    { value: '2', label: 'Blue' },
    { value: '3', label: 'Green' },
    { value: '4', label: 'Disabled', disabled: true },
    {
      value: 'custom',
      label: 'Custom',
      render: props => <span className="h-8 p-8 text-red-600">{props.label} </span>,
    },
  ];

  return (
    <Dialog trigger={<div>Open</div>} open={open} onOpenChange={setOpen}>
      <div className="">
        <Tabs
          contentStyle="p-4"
          tabs={[
            {
              title: '1',
              value: '1',
              render: () => {
                return (
                  <>
                    <div className="my-1 h-40 w-full bg-green-200 p-3"> Test</div>
                    <ComboBox
                      options={options}
                      value={state}
                      onSelect={setState}
                      onInputChange={e => console.log(e)}
                    />
                  </>
                );
              },
            },
            {
              title: '2',
              value: '2',
              render: () => {
                return <div>Second content</div>;
              },
            },
          ]}
        />
      </div>
    </Dialog>
  );
}

export const WithTabs: Story = {
  render: () => <StateComboBox />,
};
