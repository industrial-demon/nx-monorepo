import clsx from 'clsx';
import { useContext, useId } from 'react';
import { ReactNode, createContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

const NavIdContext = createContext<string | undefined>(undefined);

export function AppHeader({
  title,
  userMenu,
  children,
}: {
  title: string;
  userMenu: ReactNode;
  children?: ReactNode;
}) {
  const navId = useId();

  return (
    <header>
      <nav id={navId}>
        <div className="bg-white">
          <div className="mx-8 flex h-[60px] gap-8">
            <Link
              to="/"
              className="flex items-center whitespace-nowrap text-[22px] font-semibold leading-8"
            >
              {title}
            </Link>

            <NavIdContext.Provider value={navId}>
              <div className="flex grow overflow-auto">{children}</div>
            </NavIdContext.Provider>

            <div className="-mr-3 flex items-center">{userMenu}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function AppHeaderLink({
  to,
  title,
  children,
}: {
  to: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  const location = useLocation();
  const isActive = useMemo(() => location.pathname.startsWith(to), [location.pathname, to]);

  return (
    <Link
      to={to}
      className={clsx(
        'hover:bg-blue02/[0.08] flex items-center whitespace-nowrap px-4 text-sm font-medium',
        isActive && 'bg-blue02/[0.08]',
      )}
    >
      {title}

      {isActive && children && <SubLinksPortal>{children}</SubLinksPortal>}
    </Link>
  );
}

AppHeader.Link = AppHeaderLink;

function SubLinksPortal({ children }: { children: ReactNode }) {
  const navId = useContext(NavIdContext);

  if (!navId) {
    throw new Error('AppHeader.Link must be used inside AppHeader');
  }

  const nav = useMemo(() => document.getElementById(navId), [navId]);

  if (!nav) {
    throw new Error('Nav element not found');
  }

  return createPortal(
    <div className="bg-grey13 border-custom-borderGrey border-b">
      <div className="mx-8 flex h-10 overflow-auto">{children}</div>
    </div>,
    nav,
  );
}

function AppHeaderSubLink({ to, title }: { to: string; title: ReactNode }) {
  const location = useLocation();
  const isActive = useMemo(() => location.pathname.startsWith(to), [location.pathname, to]);

  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center whitespace-nowrap border-b px-4 text-sm font-medium hover:bg-gray-200',
        isActive ? 'border-black01' : 'border-transparent',
      )}
    >
      {title}
    </Link>
  );
}

AppHeader.SubLink = AppHeaderSubLink;
