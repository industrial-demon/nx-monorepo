import { observable } from 'mobx';
import { Toast } from '@radix-ui/react-toast';
import { v4 as uuidv4 } from 'uuid';

enum ToastStatusEnum {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
}

type Toast = {
  id: string;
  message: string;
  status: ToastStatusEnum;
};

interface ToastStore {
  toasts: Array<Toast>;
  addToast: (toast: Pick<Toast, 'message' | 'status'>) => void;
  removeToast: (id: Toast['id']) => void;
}

const toastStore: ToastStore = observable.object(
  {
    toasts: [],
    addToast: toast => {
      const id = uuidv4();
      toastStore.toasts.push({ id, ...toast });
    },
    removeToast: id => {
      toastStore.toasts = toastStore.toasts.filter(toast => toast.id !== id);
    },
  },
  {},
  { autoBind: true },
);

const createToast = () => {
  return {
    success: (message: string) => {
      toastStore.addToast({ message, status: ToastStatusEnum.SUCCESS });
    },
    error: (message: string) => {
      toastStore.addToast({
        message,
        status: ToastStatusEnum.ERROR,
      });
    },
    warning: (message: string) => {
      toastStore.addToast({
        message,
        status: ToastStatusEnum.WARNING,
      });
    },
    info: (message: string) => {
      toastStore.addToast({
        message,
        status: ToastStatusEnum.INFO,
      });
    },
  };
};

export { createToast, toastStore as toastControl, ToastStatusEnum };
export type { ToastStore };
