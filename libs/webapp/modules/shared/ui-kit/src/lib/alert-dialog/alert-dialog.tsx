import { Button } from '@nx-monorepo/radix-ui-kit'
import * as AlertDialogRdx from '@radix-ui/react-alert-dialog'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

export type AlertDialogProps = Pick<
  AlertDialogRdx.AlertDialogProps,
  'open' | 'onOpenChange'
> & {
  trigger?: ReactNode
  onDelete?: ()=> void
  loading?: boolean
}

export const AlertDialog = ({
  open,
  onOpenChange,
  trigger,
  onDelete,
  loading,
}: AlertDialogProps) => {
  return (
    <AlertDialogRdx.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogRdx.Trigger asChild>{trigger}</AlertDialogRdx.Trigger>
      <AlertDialogRdx.Portal className="fixed inset-0 z-40 flex items-start justify-center sm:items-center">
        <AlertDialogRdx.Overlay
          className={cx(
            'dialog-overlay',
            'bg-black-60 data-[state=open]:animate-overlayShow fixed inset-0',
            'fixed inset-0 z-30 grid',
            // nested ? 'netsed' : 'bg-black bg-opacity-30',
            'place-items-center',
            'scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300',
            'overflow-y-scroll',
          )}
        >
          <AlertDialogRdx.Content className="data-[state=open]:animate-contentShow  max-h-[85vh] w-[90vw] max-w-[500px]  rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <AlertDialogRdx.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Are you sure?
            </AlertDialogRdx.Title>
            <AlertDialogRdx.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
              This connection cannot be undone. This will permanently delete
              your connection and remove your data from our servers.
            </AlertDialogRdx.Description>
            <div className="flex justify-end gap-4">
              <AlertDialogRdx.Cancel asChild>
                <Button color="gray" size="md">
                  Cancel
                </Button>
              </AlertDialogRdx.Cancel>

              <Button color="red" loading={loading} filled size="md" onClick={onDelete}>
                Delete
              </Button>
            </div>
          </AlertDialogRdx.Content>
        </AlertDialogRdx.Overlay>
      </AlertDialogRdx.Portal>
    </AlertDialogRdx.Root>
  )
}

export default AlertDialog
