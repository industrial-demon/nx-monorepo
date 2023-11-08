import { observer } from 'mobx-react-lite'
import { match } from 'ts-pattern'
import {
  DashboardContextProvider,
  useDashboardStore,
} from './dashboard.context'

import { FilterByType } from '@webapp/ui-kit'
import { PageHeader } from './layouts/page-header'
import { PageLayout } from '../../shared/layouts/page-layout'

const Dashboard = observer(() => {
  const store = useDashboardStore()
  const users = store.loadUsers()
  return (
    <PageLayout
      header={<PageHeader />}
      filters={[<FilterByType control={store.filterByType} />]}
    >
      <ul>
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
      </ul>
    </PageLayout>
  )
})

export const DashboardPage = () => (
  <DashboardContextProvider>
    <Dashboard />
  </DashboardContextProvider>
)
