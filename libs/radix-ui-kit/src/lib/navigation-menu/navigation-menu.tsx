import * as Navigation from '@radix-ui/react-navigation-menu'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'
import { match } from 'ts-pattern'

type Props = {
  createStyles?: () => {
    root?: string
    list?: string
  }
  children?: ReactNode
} & Pick<Navigation.NavigationMenuProps, 'orientation'>

const NavigationMenu = ({
  orientation = 'horizontal',
  createStyles,
  children,
}: Props) => {
  const styles = createStyles?.()
  return (
    <Navigation.Root
      className={cx(
        'relative z-[1]',
        match(orientation)
          .with('horizontal', () => 'w-full [&>div]:w-full')
          .with('vertical', () => 'h-full [&>div]:h-full')
          .exhaustive(),
        styles?.root,
      )}
    >
      <Navigation.List
        className={cx(
          'flex',
          match(orientation)
            .with('vertical', () => 'flex-col')
            .otherwise(() => ''),
          styles?.list,
        )}
      >
        {children}
      </Navigation.List>
    </Navigation.Root>
  )
}

NavigationMenu.Item = Navigation.Item
NavigationMenu.Link = Navigation.Link

export { NavigationMenu, type Props as NavigationMenuProps }
