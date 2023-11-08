
import { ComponentPropsWithRef, forwardRef } from 'react'
import { cx } from 'class-variance-authority'
import {
  DialogOverlay,
  DialogOverlayProps,
} from '@radix-ui/react-dialog'

const OverlayFn = (
  { className, children,...props }: DialogOverlayProps,
  ref: ComponentPropsWithRef<typeof DialogOverlay>['ref'],
) => {
  return (
    <DialogOverlay
      className={cx(
        'dialog-overlay',
        'bg-black-60 data-[state=open]:animate-overlayShow fixed inset-0',
        'fixed inset-0 z-30 grid',
        // nested ? 'netsed' : 'bg-black bg-opacity-30',
        'place-items-center',
        'scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300',
        'overflow-y-scroll',
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </DialogOverlay>
  )
}

export const Overlay = forwardRef(OverlayFn)
