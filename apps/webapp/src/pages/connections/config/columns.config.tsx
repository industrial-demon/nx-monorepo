import { Observer } from 'mobx-react-lite'


import { toDateFormat } from '../../../shared/formatters/toDateFormat'
import { ConnectionEntity } from '../../../shared/api/generated/connectors'
import { ColumnBuilder } from '../../../shared/lib/react-table/column-builder'

import { NameCell } from '../../../entities/connection'

import { ColumnSorter, columnSorter } from '../../../features/sorter-colum'

import { ConnectionActionsDropdown } from '../../../widgets/connection-action-dropdown'

export const columns = new ColumnBuilder<ConnectionEntity>()
  .addColumn({
    accessorFn: row => row.name,
    id: 'name',
    header: () => (
      <div className="flex items-center gap-2">
        Name
        <ColumnSorter id="name" model={columnSorter} />
      </div>
    ),
    cell: info => (
      <Observer>
        {() => (
          <NameCell id={info.row.original.id} value={info.getValue<string>()} />
        )}
      </Observer>
    ),
  })
  .addColumn({
    accessorFn: row => row.type,
    id: 'type',
    header: () => (
      <div className="flex items-center gap-2">
        Type
        <ColumnSorter id="type" model={columnSorter} />
      </div>
    ),
    cell: info => info.getValue<string>(),
  })
  .addColumn({
    accessorFn: row => row.database,
    id: 'database',
    header: 'Database',
    cell: info => info.getValue(),
  })
  .addColumn({
    accessorFn: row => row.createTime,
    id: 'createTime',
    header: 'Date',
    cell: info => toDateFormat(new Date(info.getValue<string>())),
  })
  .addAction({
    id: 'actions',
    header: ()=> <span className='text-center'>Actions</span>,
    cell: info => <ConnectionActionsDropdown connection={info.row.original} />,
  })
  .build()
