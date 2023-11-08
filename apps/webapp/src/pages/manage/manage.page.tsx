import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import {
  SearchBox,
  TabsFilter,
  RangeFilter,
  ToggleFilter,
} from '@webapp/ui-kit'
import { BondIcon, ChartIcon, ClockIcon, PlusIcon } from '@webapp/icons'

import { PageHeader, PageLayout } from '../../shared/layouts/page-layout'
import { ManageContextProvider, useManageStore } from './connections.context'

const Manage = observer(() => {
  const store = useManageStore()
  return (
    <PageLayout
      header={
        <PageHeader
          title="Manage Connections"
          className="border-b border-grey-20 pt-[2px]"
        >
          <TabsFilter control={store.tabFilterControl}>
            <TabsFilter.Item value="saved_mapping_task">
              <BondIcon /> Save Mapping Task
            </TabsFilter.Item>
            <TabsFilter.Item value="new_mapping_task" asChild>
              <Link to="/connections">
                New Mapping Task
                <PlusIcon />
              </Link>
            </TabsFilter.Item>
          </TabsFilter>
        </PageHeader>
      }
      filters={[
        <SearchBox entityName="Tasks" control={store.searchBoxControl} />,
        <ToggleFilter
          entityName="Tasks"
          filters={[
            {
              id: nanoid(),
              value: 'summary',
              title: 'Summary',
              icon: <ChartIcon />,
            },
            {
              id: nanoid(),
              value: 'scheduled',
              title: 'Scheduled',
              icon: <ClockIcon />,
            },
          ]}
          value={store.toggleFilterControl.value}
          onValueChange={store.toggleFilterControl.onValueChange}
        />,
        <RangeFilter
          heading="Filter by Time"
          unit="hrs"
          min={0}
          max={24}
          onValueChange={store.changeToggleFilterByRange}
          value={store.filterByTymeControl.value}
        />,
      ]}
    >
      {/* <ul>
        {match(users.status)
          .with('success', () => {
            return (
              <ul>
                {users.data?.data.map(user => (
                  <li>
                    {user.id}
                    {user.name}
                  </li>
                ))}
              </ul>
            )
          })
          .with('loading', () => <span>Loading</span>)
          .with('error', () => null)
          .exhaustive()}
      </ul> */}
    </PageLayout>
  )
})

export const ManagePage = () => (
  <ManageContextProvider>
    <Manage />
  </ManageContextProvider>
)
