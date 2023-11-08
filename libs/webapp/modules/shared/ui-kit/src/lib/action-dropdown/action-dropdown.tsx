
import { ReactNode } from 'react'
import { cx } from 'class-variance-authority'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { ThreeDotIcon } from '@webapp/icons'

export function ActionDropdown({
  open,
  onOpenChange,
  actions,
}: Pick<DropdownMenuPrimitive.DropdownMenuProps, 'onOpenChange' | 'open'> & {
  actions: Array<{
    id: string
    title: string
    icon: ReactNode
    onAction: DropdownMenuPrimitive.DropdownMenuItemProps['onSelect']
  }>
}) {
  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenuPrimitive.Trigger className="text-black bg-[#F0F2F4] h-[35px] w-[35px] rounded-full dark:text-grey-40 dark:bg-[#34363A] flex justify-center items-center">
        <ThreeDotIcon />
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={cx(
            'w-[130px] bg-white rounded-md',
            'p-4 text-[13px]',
            'border-t-4  border-green-60',
            'p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
          )}
          sideOffset={10}
          align="end"
        >
          <div className="overflow-hidden flex flex-col gap-3">
            {actions.map(({ id, title, icon, onAction }) => (
              <DropdownMenuPrimitive.Item
                key={id}
                onSelect={onAction}
                className="flex gap-2 items-center h-[25px] hover:text-green-60 outline-none"
              >
                {icon}
                {title}
              </DropdownMenuPrimitive.Item>
            ))}
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
