import { ElementRef, forwardRef, ReactNode } from 'react';
import {
  DropdownMenuProps as DropdownMenuRootProps,
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuContentProps,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuArrow,
  DropdownMenuSeparator,
  DropdownMenuItemIndicator,
  DropdownMenuCheckboxItem,
} from '@radix-ui/react-dropdown-menu';
import { cx } from 'class-variance-authority';

export type DropdownMenuProps = {
  trigger: ReactNode;
  children: ReactNode;
} & DropdownMenuRootProps &
  DropdownMenuContentProps;

export const DropdownMenu = forwardRef<ElementRef<typeof DropdownMenuTrigger>, DropdownMenuProps>(
  ({ trigger, children, open, onOpenChange, ...props }, forwardedRef) => {
    return (
      <DropdownMenuRoot open={open} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger asChild ref={forwardedRef}>
          {trigger}
        </DropdownMenuTrigger>
        <DropdownContent {...props}>{children}</DropdownContent>
      </DropdownMenuRoot>
    );
  },
);

const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPortal>
      <DropdownMenuContent
        className={cx(
          'radix-side-top:animate-slide-up',
          'radix-side-bottom:animate-slide-down',
          'shadow-md',
          'bg-white',
          'z-50',
          className,
        )}
        sideOffset={4}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenuPortal>
  );
});

export {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuArrow,
  DropdownMenuSeparator,
  DropdownMenuItemIndicator,
  DropdownMenuCheckboxItem,
};
