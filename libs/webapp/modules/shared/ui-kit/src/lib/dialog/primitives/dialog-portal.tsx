import {
  DialogPortal,
  DialogPortalProps,
} from '@radix-ui/react-dialog'

export const Portal = ({
  className,
  children,
  ...props
}: DialogPortalProps) => (
  <DialogPortal className={className} {...props}>
    <div className="fixed inset-0 z-40 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPortal>
)
