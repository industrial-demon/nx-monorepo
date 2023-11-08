import { ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import { cx } from 'class-variance-authority'
import * as Tabs from '@radix-ui/react-tabs'

import { TabFilterControl } from '@webapp/mobx-models'

const TabsFilterFn = ({
  control,
  children,
}: {
  control: TabFilterControl
  children: ReactNode
}) => {
  return (
    <div className="tabs-filter max-w-fit">
      <Tabs.Root value={control.value} onValueChange={control.onValueChange}>
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Manage your account"
        >
          {children}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}

TabsFilterFn.Item = ({
  className,
  children,
  ...props
}: Tabs.TabsTriggerProps) => (
  <Tabs.Trigger
    {...props}
    className={cx(
      'bg-transparent px-5 h-[45px]',
      'flex-1 flex items-center justify-center',
      'text-[15px] leading-none',
      'whitespace-nowrap',
      'gap-[15px]',
      ' cursor-default',
      'data-[state=active]:text-green-60',
      'data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]',
      'data-[state=active]:outline-none',
      'outline-none cursor-default',
      'font-semibold',
      'dark:text-grey-30 data-[state=active]:dark:text-green-60',
      className,
    )}
  >
    {children}
  </Tabs.Trigger>
)

export const TabsFilter = observer(TabsFilterFn)
