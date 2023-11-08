import { ReactNode } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import classnames from 'classnames';
import { AlertDialogCloseButton } from './AlertDialogCloseButton';

interface Props {
  controlled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  children?: ReactNode;
  content?: ReactNode;
  dialogControl?: any;
  renderDialogs?: () => ReactNode;
}

export const AlertDialogProvider = ({ children, renderDialogs }: Props) => {
  return (
    <AlertDialogPrimitive.Root>
      {children}
      <AlertDialogContent>{renderDialogs?.()}</AlertDialogContent>
    </AlertDialogPrimitive.Root>
  );
};

export const AlertDialogContent = ({ children, ...props }: { children?: ReactNode }) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay
        className="
      scrollbar-thin scrollbar-thumb-custom scrollbar-track-custom-light fixed inset-0
      z-40
      grid
      place-items-center overflow-y-scroll bg-black bg-opacity-30
      "
      >
        <AlertDialogPrimitive.Content
          onCloseAutoFocus={e => e.preventDefault()}
          onOpenAutoFocus={e => e.preventDefault()}
          className={classnames(
            'w-[95vw] max-w-lg',
            'relative',
            'my-2',
            'p-2',
            'animate-fade-in-out z-50 rounded-md bg-white shadow-lg',
          )}
          {...props}
        >
          <AlertDialogCloseButton />
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Overlay>
    </AlertDialogPrimitive.Portal>
  );
};
