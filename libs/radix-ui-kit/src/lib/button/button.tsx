import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, cx, VariantProps } from 'class-variance-authority'

const buttonCss = cva(
  [
    'button',
    'inline-flex items-center',
    'gap-2',
    'text-center text-sm font-medium',
    'disabled:pointer-events-none',
    'disabled:opacity-70',
    '[&button+button]:mr-2.5',
    'focus:outline-none',
  ],
  {
    variants: {
      color: {
        blue: [
          'bg-blue-50 text-blue-500',
          'border border-solid border-blue-200',
          'hover:bg-blue-200',
          'focus:shadow-rounded-blue',
        ],
        red: [
          'bg-red-50 text-red-500',
          'border border-solid border-red-200',
          'hover:bg-red-200',
          'focus:shadow-rounded-red',
        ],
        violet: [
          'bg-violet-50 text-violet-500',
          'border border-solid border-violet-200',
          'hover:bg-violet-200',
          'focus:shadow-rounded-violet',
        ],
        green: [
          'bg-green-50 text-green-600',
          'border border-solid border-green-200',
          'hover:bg-green-200',
          'focus:shadow-rounded-green',
        ],
        gray: [
          'bg-gray-50 text-gray-500',
          'border border-solid border-gray-200',
          'hover:bg-gray-200',
          'focus:shadow-rounded-gray',
        ],
        orange: [
          'bg-orange-50 text-orange-500',
          'border border-solid border-orange-200',
          'hover:bg-orange-200',
          'focus:shadow-rounded-orange',
        ],
      },
      size: {
        sm: ['px-2 h-[30px]'],
        md: ['px-5 h-[36px]'],
        lg: ['px-6 h-[40px]'],
      },

      shape: {
        square: 'rounded-lg',
        circle: 'rounded-full',
      },

      filled: {
        true: '',
        false: '',
      },

      asIcon: {
        true: ['border-none bg-white shadow-none'],
        false: [],
      },

      loading: {
        true: ['pointer-events-none cursor-not-allowed opacity-70'],
        false: [''],
      },
    },
    compoundVariants: [
      {
        color: 'blue',
        filled: true,
        asIcon: false,
        className: ['bg-custom-blue-20 text-white hover:!bg-blue-600'],
      },
      {
        color: 'red',
        filled: true,
        asIcon: false,
        className: ['bg-red-500 text-white hover:!bg-red-600'],
      },
      {
        color: 'violet',
        filled: true,
        asIcon: false,
        className: ['bg-violet-500 text-white hover:bg-violet-600'],
      },
      {
        color: 'green',
        filled: true,
        asIcon: false,
        className: ['bg-green-500 text-white hover:bg-green-600'],
      },
      {
        color: 'gray',
        filled: true,
        asIcon: false,
        className: ['bg-gray-500 text-white hover:bg-gray-600'],
      },
      {
        color: 'orange',
        filled: true,
        asIcon: false,
        className: ['bg-orange-500 text-white hover:bg-orange-600'],
      },
      {
        asIcon: true, 
        className: ['focus:shadow-none', 'rounded-none' ,'h-max w-max !px-0']
      }
    ],
    defaultVariants: {
      color: 'blue',
      size: 'md',
      shape: 'square',
      asIcon: false,
    },
  },
)

type ButtonType = 'submit' | 'reset' | 'button'

type ButtonAttributes = {
  type?: ButtonType
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'type'>

export type ButtonProps = {
  icon?: ReactNode
  asChild?: boolean
  loading?: boolean
  children?: ReactNode
} & ButtonAttributes &
  Pick<
    VariantProps<typeof buttonCss>,
    'color' | 'filled' | 'shape' | 'size' | 'asIcon'
  >

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      name,
      value,
      children,
      icon,
      color,
      filled,
      shape,
      size,
      asIcon,
      className,
      type = 'button',
      disabled = false,
      loading = false,
      asChild = false,
      onClick,
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const componentAtributes = {}

    if (Comp === 'button') {
      Object.assign<
        typeof componentAtributes,
        Pick<
          ButtonAttributes,
          'type' | 'value' | 'name' | 'disabled' | 'id' | 'onClick'
        >
      >(componentAtributes, {
        id,
        type,
        value,
        name,
        disabled,
        onClick,
      })
    }

    return (
      <div className={cx('button-container', disabled && 'cursor-not-allowed')}>
        <Comp
          className={buttonCss({
            color,
            filled,
            shape,
            size,
            loading,
            asIcon,
            className,
          })}
          {...componentAtributes}
          ref={ref}
        >
          {loading && buttonSpin}
          {icon}
          <Slottable>{children}</Slottable>
        </Comp>
      </div>
    )
  },
)

const buttonSpin = (
  <svg
    className="-ml-1 mr-3 h-5 w-5 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)
