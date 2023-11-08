import type { Meta, StoryObj } from '@storybook/react'
import { cx } from 'class-variance-authority'
import { HtmlHTMLAttributes } from 'react'

const Color = ({
  className,
  title,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement & { title: string }>) => (
  <div>
    <span className="my-1 font-light text-xs">{title}</span>
    <div className={cx('w-6 h-6', className)} {...props} />
  </div>
)
const meta: Meta<typeof Color> = {
  component: Color,
  title: 'Colors palette',
  tags: ['colors', 'palette']
}

export default meta
type Story = StoryObj<typeof Color>

export const NavPanelGr: Story = {
  render: () => (
    <>
      <h1 className="text-lg text-white bg-slate-300">Dark Mode</h1>
      <div className="flex flex-wrap gap-1 h-screen bg-red-300 p-2">
        <Color className="bg-[#F0F2F4]" title="light bg-layout page" />
        <Color className="bg-[#DFE6E9]" title="light gray button" />
        <Color className="bg-[#BEBEBE]" title="form labels" />
        <Color className="bg-[#939191]" title="nav-icons, text" />
        <Color className="bg-[#7A7A7A]" title="light steps" />
        <Color className="bg-[#2F3237]" title="bg-inputs" />
        <Color className="bg-[#2D3436]" title="text light mode" />
        <Color className="bg-[#1E2024]" title="bg-switcher" />
        <Color className="bg-[#17191D]" title="bg-header" />

        <div>
          <Color className="bg-[#F0F2F4]" title="" />
          <Color className="bg-[#DFE6E9]" title="" />
          <Color className="bg-[#BEBEBE]" title="" />
          <Color className="bg-[#939191]" title="" />
          <Color className="bg-[#7A7A7A]" title="" />
          <Color className="bg-[#2F3237]" title="" />
          <Color className="bg-[#2D3436]" title="" />
          <Color className="bg-[#1E2024]" title="" />
          <Color className="bg-[#17191D]" title="" />
        </div>
      </div>
    </>
  ),
}
