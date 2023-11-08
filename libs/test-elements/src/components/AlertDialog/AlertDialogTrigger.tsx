import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';

export type AlertDialogTriggerProps = {
  trigger: ReactNode;
};

export const AlertDialogTrigger = ({ trigger }: AlertDialogTriggerProps) => {
  return <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>;
};
