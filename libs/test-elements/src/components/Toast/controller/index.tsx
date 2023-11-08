import { observer } from 'mobx-react-lite';
import { cva, VariantProps } from 'class-variance-authority';
import * as ToastPrimitive from '@radix-ui/react-toast';

import { ToatNotification } from '../view/toast-notification';
import type { ToastStore } from '../model/toast.store';

const toastRootClass = cva([
  'bg-white',
  'toast-root',
  'flex',
  'items-center',
  'p-2',
  'w-[300px]',
  'shadow-lg rounded-lg',
  'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
  'radix-state-closed:animate-toast-hide',
  'radix-swipe-end:animate-toast-swipe-out',
  'translate-x-radix-toast-swipe-move-x',
  'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
  'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
]);

const toastViewPortClass = cva(
  ['toast-viewport', 'fixed', 'p-12', 'pt-16', 'flex flex-col', 'gap-3', 'outline-none', 'z-50'],
  {
    variants: {
      position: {
        bottomRight: ['bottom-0', 'right-0'],
        bottomLeft: ['bottom-0', 'left-0'],
        topRight: ['top-0', 'right-0', 'flex-col-reverse'],
        topLeft: ['top: 0', 'left: 0', 'flex-col-reverse'],
      },
    },
  },
);

type ToastContainerProps = {
  control: ToastStore;
} & VariantProps<typeof toastViewPortClass>;

export const ToastContainer = observer(
  ({ control, position = 'topRight' }: ToastContainerProps) => {
    return (
      <ToastPrimitive.Provider swipeDirection="right" duration={5000}>
        {control.toasts.map(toast => {
          return (
            <ToastPrimitive.Root
              key={toast.id}
              className={toastRootClass()}
              onOpenChange={open => {
                if (!open) {
                  control.removeToast(toast.id);
                }
              }}
              forceMount
            >
              <ToatNotification status={toast.status} message={toast.message} />
            </ToastPrimitive.Root>
          );
        })}

        <ToastPrimitive.Viewport className={toastViewPortClass({ position })} />
      </ToastPrimitive.Provider>
    );
  },
);
