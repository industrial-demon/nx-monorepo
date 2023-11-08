import { forwardRef } from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cx } from 'class-variance-authority'

type Color = 'blue' | 'red'

const colorMap: Record<Color, string> = {
  blue: 'bg-[#6E99ED] focus:ring-blue-400',
  red: '',
}

type Props = {
  color?: 'blue' | 'red',
}&Omit<SwitchPrimitives.SwitchProps, 'color'>  

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Props
>(({ className, color = 'blue', ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cx(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer',
      'items-center rounded-full border-2 ',
      'border-transparent transition-colors ',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=unchecked]:bg-[#BABCC2]',
      colorMap[color],
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cx(
        'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
      asChild
    >
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, type Props as SwitchProps }
