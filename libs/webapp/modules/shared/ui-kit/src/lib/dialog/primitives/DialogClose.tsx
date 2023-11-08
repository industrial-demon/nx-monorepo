import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

export type DialogCloseProps = {
  trigger: ReactNode;
};

export const DialogClose = ({ trigger }: DialogCloseProps) => {
  return <Dialog.Close asChild>{trigger}</Dialog.Close>;
};
