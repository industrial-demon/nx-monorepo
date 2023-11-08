import * as ToastPrimitive from '@radix-ui/react-toast';
import { cx } from 'class-variance-authority';

import { Button } from '../../Button';
import { Icon, IconEnum } from '../../Icon';

import { getToastStatusAttributes } from '../lib/getToastAttributes';
import { ToastStatusEnum } from '../model/toast.store';

type ToatNotificationProps = {
  message: string;
  status: ToastStatusEnum;
};

export const ToatNotification = ({ message, status }: ToatNotificationProps) => {
  const attributes = getToastStatusAttributes(status);
  return (
    <div className="z-50 flex w-full rounded-md border border-slate-200">
      <div className="flex flex-1 items-center py-4 pl-5">
        <div className="radix flex w-full flex-col gap-1">
          <ToastPrimitive.Title
            className={cx(attributes.color, 'flex items-center gap-1 font-medium')}
          >
            <Icon name={attributes.icon as IconEnum} />
            {attributes.title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Description className="mt-1  text-[10px] text-[#687076] dark:text-gray-400">
            <span className="font-medium">{message}</span>
          </ToastPrimitive.Description>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col space-y-1 px-3 py-2">
          <div className="flex h-0 flex-1">
            <ToastPrimitive.Close asChild>
              <div className="flex items-center">
                <Button color={attributes.button} size="sm">
                  Ok
                </Button>
              </div>
            </ToastPrimitive.Close>
          </div>
        </div>
      </div>
    </div>
  );
};
