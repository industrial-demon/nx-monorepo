import { useState } from 'react'
import { cx } from 'class-variance-authority'

import * as Slider from '@radix-ui/react-slider'
import * as Popover from '@radix-ui/react-popover'

import { SidebarFilterContainer } from '../sidebar-filter-container/sidebar-filter-container'

const RangeFilterFn = ({
  heading,
  unit,
  ...props
}: {
  heading: string
  unit: string
} & Pick<Slider.SliderProps, 'max' | 'min' | 'value' | 'onValueChange'>) => {
  const [popover, showPopover] = useState(false)
  const current = `${props.value}${unit}`
  const currentReport = `Last ${current}`
  const maxReport = `Last ${props.max}${unit}`

  return (
    <SidebarFilterContainer heading={heading} className="pb-14">
      <Slider.Root className="mt-5" {...props}>
        <div className="flex justify-between mb-[5px] text-sm font-medium">
          <span>{currentReport}</span>
          <span>{maxReport}</span>
        </div>

        <div className="relative flex  items-center">
          <Slider.Track className="bg-[#E6E6E6] relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-green-60  rounded-full h-full" />
          </Slider.Track>

          <Popover.Root open={popover} onOpenChange={showPopover}>
            <Popover.Trigger asChild>
              <Slider.Thumb
                onClick={e => e.preventDefault()}
                onMouseMove={() => showPopover(true)}
                onMouseLeave={() => showPopover(false)}
                className="block w-4 h-4 bg-green-60  rounded-full  focus:outline-none"
                aria-label="Volume"
              />
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                sideOffset={3}
                className={cx(
                  'rounded-lg bg-green-60',
                  'outline-none',
                  'will-change-[transform,opacity]',
                  'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
                  'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
                  'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
                  'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
                )}
              >
                <div className="flex rounded-lg text-sm text-white px-[9px] py-[7px]">
                  {current}
                </div>
                <Popover.Arrow className="text-green-60 fill-current w-[6px] h-[5px]" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </Slider.Root>
    </SidebarFilterContainer>
  )
}

export const RangeFilter = RangeFilterFn
