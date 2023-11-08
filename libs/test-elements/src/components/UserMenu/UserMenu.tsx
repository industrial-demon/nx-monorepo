import { MouseEventHandler, ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { ReactComponent as UserSvg } from './user.svg';

export function UserMenu({ info, children }: { info: ReactNode; children: ReactNode }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="hover:bg-blue02/[0.08] data-[state=open]:bg-blue02/[0.08] h-12 w-[165px] rounded-lg outline-none transition"
        >
          {info}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="shadow-4x w-[165px] overflow-hidden rounded-lg bg-white py-0.5"
          sideOffset={2}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function UserMenuInfo({
  src,
  fullName,
  notified,
}: {
  src: string;
  fullName: string;
  notified?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-3">
      <div className="relative flex h-9 w-9 shrink-0">
        <Avatar.Root className="overflow-hidden rounded-full">
          <Avatar.Image className="h-full w-full object-cover" src={src} alt={fullName} />

          <Avatar.Fallback className="h-full w-full">
            <UserSvg />
          </Avatar.Fallback>
        </Avatar.Root>

        {notified && (
          <div className="bg-orange absolute right-0 top-0 h-2 w-2 rounded-full ring-2 ring-white" />
        )}
      </div>

      <div title={fullName} className="text-black01 truncate text-sm font-medium">
        {fullName}
      </div>
    </div>
  );
}

UserMenu.Info = UserMenuInfo;

function UserMenuButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <DropdownMenu.Item className="hover:bg-grey14 focus-visible:outline-none">
      <button className="flex w-full px-5 py-2.5 text-sm font-medium" onClick={onClick}>
        {children}
      </button>
    </DropdownMenu.Item>
  );
}

UserMenu.Button = UserMenuButton;
