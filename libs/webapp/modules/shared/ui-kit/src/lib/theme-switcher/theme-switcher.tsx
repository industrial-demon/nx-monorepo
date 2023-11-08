import * as SwitchPrimitives from '@radix-ui/react-switch'
import { MoonIcon, SunIcon } from '@webapp/icons'

import { cx } from 'class-variance-authority'


type Props = {
  theme: 'dark' | 'light'
  toggleTheme: (theme: 'dark' | 'light') => void
} & SwitchPrimitives.SwitchProps

export const ThemeSwitcher = ({
  className,
  theme,
  toggleTheme,
  ...props
}: Props) => {
  const isDark = theme === 'dark'
  return (
    <SwitchPrimitives.Root
      className={cx(
        'relative overflow-hidden',
        'peer h-[35px] w-[65px] shrink-0 cursor-pointer',
        'bg-white',
        'inline-flex items-center justify-around',
        'rounded-full border-2 border-gray-300',
        'transition-colors',
        'data-[state=checked]:bg-grey-80',
      )}
      onCheckedChange={checked => toggleTheme(checked ? 'dark' : 'light')}
      checked={isDark}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cx(
          'absolute left-0 z-[1]',
          'pointer-events-none block',
          'h-[25px] w-[25px] bg-green-70',
          'rounded-full',
          'shadow-lg ring-0',
          "bg-green-60",
          'transition-transform',
          'data-[state=checked]:translate-x-[33px] data-[state=unchecked]:translate-x-[4px]',
        )}
      />
      <MoonIcon />
      <SunIcon />
    </SwitchPrimitives.Root>
  )
}
