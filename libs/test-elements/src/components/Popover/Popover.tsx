import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import classnames from 'classnames';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Button } from '../Button';

export type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  arrow?: boolean;
  closeIcon?: boolean;
} & PopoverPrimitive.PopoverContentProps &
  PopoverPrimitive.PopoverProps;

export const Popover = ({
  trigger,
  children,
  sideOffset,
  open,
  onOpenChange,
  closeIcon = false,
  arrow = false,
  defaultOpen,
  ...props
}: PopoverProps) => {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className={classnames(
            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
            'max-w-min rounded shadow-md',
            'p-1',
            'border border-slate-100',
            'bg-white',
          )}
          asChild
          sideOffset={sideOffset}
          {...props}
        >
          <div>
            {children}

            {arrow && <PopoverPrimitive.Arrow className="fill-white text-slate-200" />}
            {closeIcon && <CloseIcon />}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

function CloseIcon() {
  return (
    <PopoverPrimitive.Close aria-label="Close" className="absolute right-3 top-3" asChild>
      <Button
        color="violet"
        className="focus:shadow-violet p-1"
        shape="circle"
        icon={<Cross1Icon className="h-3 w-3" />}
        asIcon
      />
    </PopoverPrimitive.Close>
  );
}
