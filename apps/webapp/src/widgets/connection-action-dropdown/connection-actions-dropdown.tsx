import { CrossIcon, PencilIcon } from '@webapp/icons'
import { ActionDropdown, AlertDialog, Dialog } from '@webapp/ui-kit'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { ConnectionEntity } from '../../shared/api/generated/connectors'
import { useDeleteConnectionMutate } from './api/useDeleteConnection.mutate'

export const ConnectionActionsDropdown = observer(
  ({ connection }: { connection: ConnectionEntity }) => {
    const [open, setOpen] = useState(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)

    const deleteMutate = useDeleteConnectionMutate({
      onSuccess: () => {
        setOpenDeleteDialog(false)
        setOpenDropdown(false)
      },
    })

    const onSelectItem = () => (open: boolean) => {
      setOpen(open)
    }
    return (
      <>
        <div className="w-full flex justify-center">
          <ActionDropdown
            open={openDropdown}
            onOpenChange={setOpenDropdown}
            actions={[
              {
                id: 'edit',
                title: 'Edit',
                icon: <PencilIcon className="w-[14px] h-[14px]" />,
                onAction: e => {
                  setOpen(true)
                },
              },
              {
                id: 'delete',
                title: 'Delete',
                icon: <CrossIcon className="w-[14px] h-[14px]" />,
                onAction: e => {
                  setOpenDeleteDialog(true)
                },
              },
            ]}
          />
        </div>
        <Dialog open={open} onOpenChange={onSelectItem()}>
          {
            /** @todo not implement yet */
          }
        </Dialog>

        <AlertDialog
          open={openDeleteDialog}
          onOpenChange={setOpenDeleteDialog}
          loading={deleteMutate.isLoading}
          onDelete={() => deleteMutate.mutate(connection.id)}
        ></AlertDialog>
      </>
    )
  },
)
