import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '../Button';

export const AlertDialogCloseButton = () => {
  return (
    <AlertDialogCancel asChild>
      <Button
        className="focus:shadow-violet absolute right-4 top-4 bg-slate-200 text-slate-500 hover:bg-white"
        shape="circle"
        icon={<Cross2Icon className="h-5 w-5" />}
        asIcon
      />
    </AlertDialogCancel>
  );
};
