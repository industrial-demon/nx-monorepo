import { IconEnum } from '../../Icon';
import { ButtonProps } from '../../Button';

import { ToastStatusEnum } from '../model/toast.store';

type Attributes = {
  icon?: IconEnum;
  title?: string;
  color?: string;
  button?: ButtonProps['color'];
};

export const getToastStatusAttributes = (status: ToastStatusEnum) => {
  const attributes: Attributes = {};

  switch (status) {
    case ToastStatusEnum.SUCCESS: {
      attributes.icon = IconEnum.SUCCESS;
      attributes.title = 'Success';
      attributes.color = 'text-emerald-600';
      attributes.button = 'green';
      break;
    }
    case ToastStatusEnum.ERROR: {
      attributes.icon = IconEnum.ERROR;
      attributes.title = 'Error';
      attributes.color = 'text-red-600';
      attributes.button = 'red';
      break;
    }
    case ToastStatusEnum.INFO: {
      attributes.icon = IconEnum.INFO;
      attributes.title = 'Info';
      attributes.color = 'text-sky-600';
      attributes.button = 'blue';
      break;
    }
    case ToastStatusEnum.WARNING: {
      attributes.icon = IconEnum.WARNING;
      attributes.title = 'Warning';
      attributes.color = 'text-orange-600';
      attributes.button = 'orange';
      break;
    }
  }
  return attributes;
};
