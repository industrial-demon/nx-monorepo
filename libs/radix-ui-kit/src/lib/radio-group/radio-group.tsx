import { createContext, useContext } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cva, cx, VariantProps } from 'class-variance-authority'

const radioItem = cva(
  [
    'radio-item',
    'bg-white shrink-0',
    'w-6',
    'h-6',
    'rounded-full',
    'border border-slate-300',
    'disabled:opacity-50',
    'overflow-hidden',
  ],
  {
    variants: {
      color: {
        blue: ['focus:shadow-rounded-blue-20'],
        violet: ['focus:shadow-rounded-violet'],
      },
    },
    defaultVariants: {
      color: 'violet',
    },
  },
)

const radioItemIndicator = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'h-full',
    'w-full',
    'relative',

    'after:content[""]',
    'after:absolute',
    'after:block',
    'after:rounded-full',
  ],
  {
    variants: {
      color: {
        blue: ['after:bg-custom-blue-20'],
        violet: ['after:bg-violet-600'],
      },
      size: {
        sm: ['after:h-2 after:w-2'],
        md: ['after:h-3 after:w-3'],
      },
    },
    defaultVariants: {
      color: 'violet',
      size: 'sm',
    },
  },
)

type Variants = VariantProps<typeof radioItem> &
  VariantProps<typeof radioItemIndicator>

const VariantsContext = createContext<Variants>({
  color: 'violet',
  size: 'md',
})

type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps & Variants

type RadioItemProps = RadioGroupPrimitive.RadioGroupItemProps & {
  indicatorStyles?: string
}

const RadioItem = ({ className, ...props }: RadioItemProps) => {
  const variants = useContext(VariantsContext)
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className={cx(radioItem({ color: variants.color }), className)}
    >
      <RadioGroupPrimitive.RadioGroupIndicator
        className={cx(
          radioItemIndicator({ color: variants.color, size: variants.size }),
        )}
      />
    </RadioGroupPrimitive.RadioGroupItem>
  )
}

const RadioGroup = ({ children, size, color, ...props }: RadioGroupProps) => {
  return (
    <VariantsContext.Provider value={{ color, size }}>
      <RadioGroupPrimitive.RadioGroup {...props}>
        {children}
      </RadioGroupPrimitive.RadioGroup>
    </VariantsContext.Provider>
  )
}

RadioGroup.Item = RadioItem

export { RadioGroup }
