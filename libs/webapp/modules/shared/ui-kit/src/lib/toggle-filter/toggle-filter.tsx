import { ReactNode } from 'react'
import { cx } from 'class-variance-authority'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { SidebarFilterContainer } from '../sidebar-filter-container/sidebar-filter-container'

const ToggleFn = ({
  entityName,
  filters,
  value,
  onValueChange
}: Pick<ToggleGroup.ToggleGroupMultipleProps, 'value' | 'onValueChange'> & {
  entityName: string
  filters: Array<{
    id: string
    value: string
    title: string
    icon: ReactNode
  }>
}) => {
  return (
    <SidebarFilterContainer
      className="gap-5"
      heading={`Filter by ${entityName}`}
    >
      <ToggleGroup.Root
        type="multiple"
        value={value}
        onValueChange={onValueChange}
      >
        <div className="flex flex-col gap-6">
          {filters.map(filter => (
            <ToggleGroup.Item
              key={filter.id}
              value={filter.value}
              className={cx(
                'inline-flex items-center',
                'gap-4',
                'font-semibold',
                'text-[16px]',
                'data-[state=on]:text-green-60',
              )}
            >
              {filter.icon}
              {filter.title}
            </ToggleGroup.Item>
          ))}
        </div>
      </ToggleGroup.Root>
    </SidebarFilterContainer>
  )
}

export const ToggleFilter = ToggleFn
