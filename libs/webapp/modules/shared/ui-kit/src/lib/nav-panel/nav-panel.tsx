import { NavigationMenu } from '@nx-monorepo/radix-ui-kit'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

type Props = {
  routes: Array<
    { icon: ReactNode; to: string } & Pick<
      NavLinkProps,
      'to' | 'target' | 'title'| "id"
    >
  >
}

export const NavPanel = ({ routes }: Props) => (
  <NavigationMenu
    createStyles={() => ({
      root: '[&>div]:h-full',
      list: 'gap-12 h-full',
    })}
  >
    {routes.map(({ icon, ...route }) => (
      <NavigationMenu.Item className="h-full" value={route.to} key={route.id}>
        <NavLink
          className={({ isActive }) => {
            return cx(
              'flex items-center h-full gap-4',
              'hover:text-green-60 dark:hover:text-green-60',
              isActive ? 'text-green-60 dark:text-green-60 pb-1 border-t-4 border-t-green-60': 
              "dark:text-grey-40",
            )
          }}
          {...route}
        >
          {icon}
          {route.title}
        </NavLink>
      </NavigationMenu.Item>
    ))}
  </NavigationMenu>
)
