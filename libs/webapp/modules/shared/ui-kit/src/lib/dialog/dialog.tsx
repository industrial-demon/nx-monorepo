import { ReactNode } from 'react'
import {
  Dialog as DialogRoot,
  DialogProps as DialogRootProps,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import * as DialogPrimitive from './primitives'

export type Props = {
  trigger?: ReactNode
  title?: string | ReactNode
  nested?: boolean
} & DialogRootProps

export const Dialog = ({
  trigger,
  open = false,
  children,
  title,
  onOpenChange,
  ...props
}: Props) => {
  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay>
          <DialogPrimitive.Content>
            <DialogPrimitive.DialogHeader alignTitle="left">
              <DialogPrimitive.DialogTitle>{title}</DialogPrimitive.DialogTitle>
              <DialogPrimitive.DialogCloseButton />
            </DialogPrimitive.DialogHeader>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogRoot>
  )
}
