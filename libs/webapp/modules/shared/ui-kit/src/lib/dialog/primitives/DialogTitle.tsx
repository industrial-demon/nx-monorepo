import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { DialogTitle as RdxTitle } from '@radix-ui/react-dialog';
import { cx } from 'class-variance-authority';


export const DialogTitle = forwardRef<
  ElementRef<typeof RdxTitle>,
  ComponentPropsWithoutRef<typeof RdxTitle>
>(({ className, ...props }, ref) => (
  <RdxTitle
    ref={ref}
    className={cx('text-2xl font-semibold text-slate-900', 'text-center', className)}
    {...props}
  />
));
DialogTitle.displayName = RdxTitle.displayName;
