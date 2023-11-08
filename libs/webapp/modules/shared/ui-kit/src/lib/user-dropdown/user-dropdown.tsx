import * as AvatarPrimitive from '@radix-ui/react-avatar'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ArrowDownIcon } from '@webapp/icons'
import { cx } from 'class-variance-authority'

export function UserDropdown({
  src,
  userNane,
  onLogoutClick,
  onMyAccountClick,
  onSettingClick,
}: Pick<AvatarPrimitive.AvatarImageProps, 'src'> & {
  onMyAccountClick: () => void
  onLogoutClick: () => void
  onSettingClick: () => void
  userNane: string
}) {
  const avatar = <Avatar src={src} />

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="flex items-center outline-none dark:text-grey-40">
        {avatar}
        <span className="ml-[13px] mr-[7px] max-w-[66px] text-ellipsis overflow-hidden whitespace-nowrap">
          {userNane}
        </span>
        <ArrowDownIcon />
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={cx(
            'w-64 bg-white rounded-md',

            'pt-4',
            'border-t-4  border-green-60',
            'p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
          )}
          sideOffset={10}
          align="end"
        >
          <div className="overflow-hidden">
            <DropdownMenuPrimitive.Item className="outline-none border-none focus:outline-none">
              {avatar}
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item>My Account</DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item>Settings</DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item>Reset</DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Separator className="h-[1px] w-full bg-slate-400 px-2 my-4"></DropdownMenuPrimitive.Separator>
            <DropdownMenuPrimitive.Item onSelect={() => onLogoutClick()}>
              Logout
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Arrow className="fill-white w-5 h-5 stroke stroke-green-60" />
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

function Avatar({ src }: Pick<AvatarPrimitive.AvatarImageProps, 'src'>) {
  return (
    <AvatarPrimitive.Root className="w-8 h-8 inline-flex rounded-full">
      <AvatarPrimitive.Image
        src={src}
        alt="User avatar"
        className="h-full w-full rounded-[inherit] object-cover"
      />
      <AvatarPrimitive.Fallback
        className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        U
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
