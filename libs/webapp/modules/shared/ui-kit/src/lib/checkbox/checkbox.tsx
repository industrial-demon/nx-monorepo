import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@webapp/icons'
import { cx } from 'class-variance-authority'
import { forwardRef, ComponentPropsWithRef } from 'react'

type Props = Pick<
  CheckboxPrimitive.CheckboxProps,
  'checked' | 'defaultChecked' | 'onCheckedChange' | 'name' | 'id'
>

function CheckboxFn(
  props: Props,
  forwardRef: ComponentPropsWithRef<typeof CheckboxPrimitive.Root>['ref'],
) {
  return (
    <CheckboxPrimitive.Root
      className={cx(
        'flex items-center justify-center w-5 h-5',
        'rounded-[3px]',
        'border',
        'data-[state=checked]:bg-green-60',
        'data-[state=checked]:border-green-60',
        'data-[state=unchecked]:bg-white',
        'data-[state=unchecked]:border-grey-20',
        'dark:bg-grey-60 dark:data-[state=checked]:bg-green-60',
      )}
      ref={forwardRef}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator className="data-[state=unchecked]:hidden">
        <CheckIcon />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
}

const Checkbox = forwardRef(CheckboxFn)

export { Checkbox, type Props as CheckboxProps }
