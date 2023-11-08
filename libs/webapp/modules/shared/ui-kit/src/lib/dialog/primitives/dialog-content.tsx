import { ComponentPropsWithRef, forwardRef } from 'react'
import { cx } from 'class-variance-authority'

import {
  DialogContent,
  DialogContentProps,
} from '@radix-ui/react-dialog'

const ContentFn = (
  { className, children, ...props }: DialogContentProps,
  ref: ComponentPropsWithRef<typeof DialogContent>['ref'],
) => {
  return (
    <DialogContent
      className={cx(
        // sizeMap[size],
        // 'my-4',
        // 'p-5',
        "w-fit h-fit",
        'animate-fade-in-out z-20 rounded-md bg-white shadow-lg',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </DialogContent>
  )
}

export const Content = forwardRef(ContentFn)
