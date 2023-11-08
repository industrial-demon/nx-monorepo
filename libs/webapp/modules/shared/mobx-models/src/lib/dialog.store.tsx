import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
export interface IDialogControl {
  id: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  onAction?: <T>(value: T) => void;
  nested?: boolean;
}
export class DialogStore {
  dialogs: Map<string, IDialogControl> = new Map();

  addDialog(dialog: IDialogControl) {
    if (!this.dialogs.has(dialog.id)) {
      this.dialogs.set(dialog.id, dialog);
    }
  }

  removeDialog(dialog: IDialogControl) {
    this.dialogs.delete(dialog.id);
  }

  constructor() {
    makeObservable(this, {
      dialogs: observable,
      addDialog: action,
      removeDialog: action,
    });
  }

  static create() {
    return new DialogStore();
  }
}

const dialogStore = DialogStore.create();

export const createDialog = ({
  id,
  isOpen = false,
  nested,
}: Omit<IDialogControl, 'isOpen' | 'open' | 'close'> & {
  isOpen?: boolean;
}) => {
  const existingDialog = dialogStore.dialogs.get(id);
  if (existingDialog) {
    return existingDialog;
  }

  const dialog = observable.object<IDialogControl>(
    {
      isOpen,
      id,
      nested,

      open() {
        this.isOpen = true;
        dialogStore.addDialog(this);
      },

      close() {
        this.isOpen = false;
        dialogStore.removeDialog(this);
      },
    },
    {},
    {
      autoBind: true,
    },
  );

  return dialog;
};

// type DialogComponentProps = {
//   control: IDialogControl;
//   title?: string;
// } & Pick<DialogProps, 'children' | 'trigger' | 'className' | 'size' | 'alignTitle'>;

// const DialogComponent = observer(
//   ({ control, children, className, trigger, ...props }: DialogComponentProps) => {
//     const toggle = (open: boolean) => {
//       open ? control.open() : control.close();
//     };
//     return (
//       <Dialog
//         className={className}
//         open={control.isOpen}
//         onOpenChange={toggle}
//         trigger={trigger}
//         nested={control.nested}
//         {...props}
//       >
//         {children}
//       </Dialog>
//     );
//   },
// );

// export { dialogStore, DialogComponent };
