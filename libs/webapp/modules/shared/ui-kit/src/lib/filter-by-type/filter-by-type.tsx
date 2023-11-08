import { observer } from 'mobx-react-lite'
import * as Label from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { FilterByTypeListControl } from '@webapp/mobx-models'
import { Checkbox, CheckboxProps } from '../checkbox/checkbox'
import { SidebarFilterContainer } from '../sidebar-filter-container/sidebar-filter-container'
import { ScrollArea } from '../scroll-area'

type Props<T> = {
  control: FilterByTypeListControl<T>
}

const FilterTypeItem = ({
  id,
  checked,
  onCheckedChange,
  title,
}: CheckboxProps & { title: string }) => {
  return (
    <li className={cx('flex items-center gap-5')}>
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label.Root
        htmlFor={id}
        className={cx(
          'whitespace-nowrap overflow-hidden text-ellipsis',
          checked && 'text-green-60',
        )}
      >
        {title}
      </Label.Root>
    </li>
  )
}

const FilterByType = observer(<T,>({ control }: Props<T>) => {
  return (
    <SidebarFilterContainer
      className="gap-[30px] max-h-[354px] overflow-hidden"
      heading="Filter by Type"
    >
      <ScrollArea className="h-full w-full pr-5 pb-6">
        <ul className="flex flex-col gap-5 whitespace-nowrap overflow-hidden text-ellipsis">
          {control.controlsList.map(({ id, title, checkboxControl }) => (
            <FilterTypeItem
              id={id}
              key={id}
              title={title}
              checked={checkboxControl.checked}
              onCheckedChange={checked => {
                if (id === 'ALL') {
                  control.allOn()
                }

                if (id !== 'ALL') {
                  if (
                    control.selectedTypes.length < 2 &&
                    control.selectedTypes.includes(id as T) &&
                    checked === false
                  ) {
                    control.allOn()
                  } else {
                    control.allOff()
                  }
                }

                if (typeof checked === 'boolean')
                  checkboxControl.onCheckedChange?.(checked)
              }}
            />
          ))}
        </ul>
      </ScrollArea>
    </SidebarFilterContainer>
  )
})

export { FilterByType, type Props as FilterByTypeProps }
