import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const badge = cva(['badge', 'rounded-lg'], {
  variants: {
    color: {
      green: ['bg-[#1BB75A] text-white'],
      red: ['bg-[#E7642C] text-white'],
      yellow: ['bg-[#E7B22C] text-white'],
      gray: ['bg-gray-500 text-white'],
      blue: ['bg-blue-500 text-white'],
      orange: ['bg-orange-500 text-white'],
      violet: ['bg-violet-500 text-white'],
    },
    size: {
      sm: 'px-2 py-0',
      md: 'px-3 py-1',
      lg: 'px-4 py-2',
    },
  },
})

export type BadgeProps = { status: string } & Pick<
  HTMLAttributes<HTMLSpanElement>,
  'className'
> &
  VariantProps<typeof badge>

export const Badge = ({
  status,
  color = 'blue',
  size = 'md',
  className,
}: BadgeProps) => {
  return <span className={badge({ color, size, className })}>{status}</span>
}
