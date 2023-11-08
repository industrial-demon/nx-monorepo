import { ForwardedRef, forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import { CheckIcon } from '@radix-ui/react-icons'
import { cx } from 'class-variance-authority'

export type CheckboxPropsType = {
  id?: string
} & CheckboxProps

export const Checkbox = forwardRef(
  (
    { ...props }: CheckboxPropsType,
    forwardRef: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <CheckboxPrimitive.Root
        {...props}
        ref={forwardRef}
        className={cx(
          'flex',
          'items-center',
          'justify-center',
          'w-5',
          'h-5',
          `${props.checked ? 'bg-[#6E99ED]' : 'bg-white'}`,
          'rounded',
          'outline-none',
          'border',
          'border-solid',
          'border-slate-300',
          'interactive-input',
        )}
      >
        <CheckboxPrimitive.Indicator
          className={`${props.checked ? 'text-white' : ''}`}
        >
          <CheckIcon className="bg-blue-400 h-6 w-6 rounded text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  },
)
