import {
  ComponentPropsWithRef,
  ElementRef,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  ScrollArea,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'

import { cva } from 'class-variance-authority'

const selectTrigger = cva([
  'select-trigger',
  'inline-flex items-center justify-between',
  'rounded border border-slate-300 px-[15px] text-[13px] leading-none',
  'h-[35px] min-w-[150px] w-full gap-[5px] ',
  'bg-white text-slate-600',
  'shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3',
  'focus:shadow-rounded-violet',
  'data-[placeholder]:text-violet9 outline-none',
  '[&>svg]:data-[state="open"]:rotate-180',
  'font-semibold',
])

const selectContent = cva([
  'select-content',
  'overflow-hidden z-50 bg-white rounded-md',
  'shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
])

const selectItem = cva([
  'text-[13px] leading-none',
  'text-slate-600 rounded-[3px]',
  'flex items-center justify-between',
  'h-6 px-4',
  'relative',
  'select-none',
  'data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none',
  'data-[highlighted]:outline-none data-[highlighted]:bg-green-60 data-[highlighted]:text-white',
])

const selectViewport = cva(['select-viewport', 'p-1'], {
  variants: {
    position: {
      popper: [
        'w-full min-w-[var(--radix-select-trigger-width)] max-h-[128px]',
      ],
      'item-aligned': [],
    },
  },
})

const scrollAreaRoot = cva([
  'scroll-area-root',
  'w-full h-full overflow-hidden',
])

const scrollBar = cva([
  'scroll-area-scroll-bar',
  'flex select-none touch-none',
  'p-0.5 bg-slate-300',
  'transition-colors duration-[160ms] ease-out',
  'data-[orientation=vertical]:w-2.5',
])

const scrollThumb = cva([
  'scroll-area-thumb',
  "flex-1 bg-slate-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]",
  // "flex-1 bg-green-500 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]",
  // 'relative before:content-[""]',
  // 'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]',
])

export type SelectProps = {
  options: Array<SelectItemProps>
  placeholder?: SelectPrimitive.SelectValueProps['placeholder']
  label?: string
  triggerRef?: ComponentPropsWithRef<
    typeof SelectPrimitive.SelectTrigger
  >['ref']
} & SelectPrimitive.SelectProps &
  Pick<SelectPrimitive.SelectContentProps, 'position'>

export function Select({
  placeholder,
  position = 'popper',
  open,
  onOpenChange,
  onValueChange,
  options = [],
  triggerRef,
}: SelectProps) {
  return (
    <SelectPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger ref={triggerRef} className={selectTrigger()}>
        <SelectPrimitive.Value placeholder={placeholder || 'Select item'} />
        <SelectPrimitive.Icon
          asChild
          className="trigger-indicator text-slate-600"
        >
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position={position}
          sideOffset={position === 'popper' ? 3 : 0}
          className={selectContent()}
        >
          <ScrollArea className={scrollAreaRoot()} type="auto">
            <SelectPrimitive.Viewport
              asChild
              style={{ overflowX: undefined, overflowY: undefined }}
              className={selectViewport({ position: position })}
            >
              <Viewport>
                {options.map(option => {
                  return (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      addon={option.addon}
                      disabled={option.disabled}
                    />
                  )
                })}
              </Viewport>
            </SelectPrimitive.Viewport>

            <Scrollbar className={scrollBar()} orientation="vertical">
              <Thumb className={scrollThumb()} />
            </Scrollbar>
          </ScrollArea>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

type SelectItemProps = Pick<
  SelectPrimitive.SelectItemProps,
  'value' | 'children' | 'className' | 'disabled'
> & {
  addon?: ReactNode
  label: string
}

const SelectItem = forwardRef(
  (
    { children, className, label, addon, ...props }: SelectItemProps,
    forwardedRef: Ref<ElementRef<typeof SelectPrimitive.Item>>,
  ) => {
    return (
      <SelectPrimitive.Item
        className={selectItem({ className })}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText asChild>
          <div className="flex items-center gap-1">
            {addon}
            {label}
          </div>
        </SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator className="inline-flex items-center justify-center">
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  },
)

export default Select
