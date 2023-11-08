import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

export type DialogTriggerProps = {
  trigger: ReactNode;
} & Dialog.DialogTriggerProps;

export const DialogTrigger = ({ trigger }: DialogTriggerProps) => {
  return <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>;
};
