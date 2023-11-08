import type { Meta, StoryObj } from '@storybook/react'
import Select, { SelectProps } from './select'
import { IconJarLogoIcon , ImageIcon } from '@radix-ui/react-icons'

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

const options: SelectProps['options'] = Array.from(
  { length: 16 },
  (_, idx) => idx + 1,
).map(item => ({
  label: `${item}-Label`,
  value: item.toString(),
  addon: item % 2 === 1 ? <IconJarLogoIcon /> : <ImageIcon className='text-red-500'/> ,
}))

export const SelectStory: Story = {
  render: () => {
    return (
      <div className="w-screen h-screen bg-violet-300 flex justify-center items-center">
       
        <div className="w-[200px]">
           <Select options={options} />
        </div>
      </div>
    )
  },
}
