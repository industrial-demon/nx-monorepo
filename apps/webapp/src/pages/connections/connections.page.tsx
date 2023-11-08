import { observer } from 'mobx-react-lite'
import { useDebounce } from 'use-debounce'

import { Dialog, FilterByType, PageSize, SearchBox } from '@webapp/ui-kit'

import { PageHeader, PageLayout } from '../../shared/layouts/page-layout'

import {
  ConnectionsContextProvider,
  useConnectionsStore,
} from './providers/connections.context'

import { ConnectionEntity } from '../../shared/api/generated/connectors'
import { DataGrid, useDataGridModel } from '../../widgets/data-grid'
import {
  useLoadConnections,
  useCreateConnection,
} from '../../entities/connection'

import { columns } from './config/columns.config'
import { Button } from '@webapp/ui-kit'
import { PlusIcon } from '@radix-ui/react-icons'
import {
  ConnectionCreateForm,
  useCreateConnectionForm,
} from '../../features/connection-create-form'
import { useEffect, useState } from 'react'

const Connections = observer(() => {
  const store = useConnectionsStore()
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [name] = useDebounce(store.searchBoxControl.value, 500)

  console.log(store.pagination.size)

  const connectionsQuery = useLoadConnections({
    sortedBy: store.columnSorter.sortingParams,

    filters: {
      name: name,
      type: store.filterByTypeControl.selectedTypes,
    },
  })

  const dataGridModel = useDataGridModel<ConnectionEntity>({
    columns: columns,
    data: connectionsQuery.data?.result || [],
  })

  const createForm = useCreateConnectionForm()
  const createConnection = useCreateConnection({
    onSuccess: () => {
      setOpenCreateDialog(false)
    },
  })

  useEffect(() => {
    if (!openCreateDialog) {
      createForm.reset()
    }
  }, [createForm, openCreateDialog])

  return (
    <PageLayout
      header={<PageHeader title="Manage Connections"></PageHeader>}
      filters={[
        <SearchBox
          key="searchbox"
          entityName="Connection"
          control={store.searchBoxControl}
        />,
        <FilterByType key="filterByType" control={store.filterByTypeControl} />,
      ]}
    >
      <div className="flex justify-end mb-1">
        <Dialog
          title="Create Connection"
          open={openCreateDialog}
          onOpenChange={setOpenCreateDialog}
          trigger={
            <Button color="green" filled icon={<PlusIcon />}>
              Add Connection
            </Button>
          }
        >
          <ConnectionCreateForm
            loading={createConnection.isLoading}
            form={createForm}
            onSubmit={createConnection.mutateAsync}
          />
        </Dialog>
      </div>
      <DataGrid<ConnectionEntity>
        model={dataGridModel}
        pagination={[
          <PageSize
            key="page-size"
            size={store.pagination.size}
            onChangeSize={store.pagination.setSize}
          />,
        ]}
      />
    </PageLayout>
  )
})

export const ConnectionsPage = () => (
  <ConnectionsContextProvider>
    <Connections />
  </ConnectionsContextProvider>
)
