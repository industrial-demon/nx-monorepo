// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from './scroll-area'
import './styles.css'

const meta: Meta<typeof ScrollArea> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ScrollArea',
  component: ScrollArea,
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export const WithTailwind: Story = {
  render: () => (
    <div className="w-screen h-screen bg-violet-300 flex justify-center items-center">
      <div className=''>
        <ScrollArea className={"w-56 h-56"} >
          {TAGS.map(tag => (
            <div
              className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  ),
}

export const WithNative: Story = {
  render: () => (
    <div className="w-screen h-screen bg-violet-300 flex justify-center items-center">
      <div >
        <ScrollArea className='scroll-area'>
          {TAGS.map(tag => (
            <div
              className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  ),
}
