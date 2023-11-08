import { DialogClose } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '../../button/button';


export const DialogCloseButton = () => {
  return (
    <DialogClose asChild>
      <Button color="gray" shape="circle" asIcon icon={<Cross2Icon className="h-5 w-5" />} />
    </DialogClose>
  );
};
