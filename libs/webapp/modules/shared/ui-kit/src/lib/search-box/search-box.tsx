import { SearchIcon } from '@webapp/icons'
import { SearchBoxControl } from '@webapp/mobx-models'

import { InputGroup } from '../input-group/input-group'
import { SidebarFilterContainer } from '../sidebar-filter-container/sidebar-filter-container'
import { observer } from 'mobx-react-lite'

export type SearchBoxProps = {
  entityName: string
  control: SearchBoxControl
}

export const SearchBox = observer(({ entityName, control }: SearchBoxProps) => {
  return (
    <SidebarFilterContainer className="gap-5" heading={`Search ${entityName}`}>
      <InputGroup
        value={control.value}
        onChange={e => control.onSearch(e.target.value)}
      >
        <InputGroup.Input />
        <InputGroup.Icon icon={<SearchIcon className='dark:stroke-fill-grey-40' />} />
      </InputGroup>
    </SidebarFilterContainer>
  )
})
