import { Fragment, ReactNode, Ref } from 'react'
import { flexRender, Row, Table } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'

import { match } from 'ts-pattern'

// type TableProps<TData> = {
//   columns: Array<ColumnDef<TData>> | Array<any>
//   data: Array<TData>
//   state?: TableOptions<TData>['state']
//   getRowCanExpand?: TableOptions<TData>['getRowCanExpand']
//   onRowClick?: (row?: TData) => void
//   renderSubComponent?: SubComponentProps<TData>['renderSubComponent']

//   stickyHeader?: boolean
//   reset?: boolean
//   height?: string
//   width?: string

//   headerClassName?: HTMLTableElement['className']
//   cellClassName?: HTMLTableCellElement['className']
//   rowClassName?: HTMLTableRowElement['className']
//   tableBodyClassName?: HTMLDivElement['className']

//   paginatorControl?: ReactNode
//   pageSizeControl?: ReactNode
//   subComponentColspan?: number
//   tableRef?: ForwardedRef<HTMLDivElement> | null
// }

// const headClass = cva(['thead', 'bg-white shadow-md'], {
//   variants: {
//     sticky: {
//       true: ['sticky top-[-1px] z-20'],
//       false: [''],
//     },
//   },
// })
const tableContainerClass = cva([
  'table-container',
  'h-full',
  'flex flex-col',
  'border border-slate-300 rounded-2xl overflow-hidden',
])

const bodyClass = cva([
  'table-body',
  'md:table-row-group',
  '[&>tr:nth-child(odd)]:bg-[#F8F8F8]',
  '[&>tr:nth-child(even)]:bg-white',
])

const cellClass = cva(
  [
    'table-cell',
    'py-4 px-3',
    'whitespace-nowrap',
    'dark:text-grey-30 dark:bg-grey-80',
  ],
  {
    variants: {
      align: {
        center: ['text-center'],
        left: ['text-left'],
        right: ['text-right'],
      },
    },
    defaultVariants: {
      align: 'left',
    },
  },
)

const rowClass = cva(['table-row'], {
  variants: {
    expanded: {
      true: ['!bg-[#E5EDFF] cursor-pointer'],
      false: [],
    },
  },
  defaultVariants: {
    expanded: false,
  },
})

const thClass = cva([
  'bg-blue-20 dark:bg-grey-60',
  'text-grey-70 dark:text-grey-30',
  'text-left whitespace-nowrap p-3',
])

const tableStyle = {
  table: 'relative w-full border-collapse ',
  theadRow: 'md:border-none rounded-md ',
  tfoot: 'lg:justify-center p-4 md:justify-start',
}

export const DataGrid = <TData,>({
  model,
  tableRef,
  pagination,
}: {
  model: Table<TData>
  tableRef?: Ref<HTMLDivElement>
  pagination?: ReactNode
}) => {
  return (
    <div className={tableContainerClass()} ref={tableRef}>
      <table className={tableStyle.table}>
        <thead className={''}>
          {model.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id} className={tableStyle.theadRow}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className={thClass()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            )
          })}
        </thead>
        <tbody className={bodyClass()}>
          {match(model.options.data.length)
            .with(0, () => <NoRecords />)
            .otherwise(() =>
              model.getRowModel().rows.map(row => {
                return (
                  <Fragment key={row.id}>
                    <tr
                      onClick={() => {
                        //   onRowClick?.()
                        //   if (row.getCanExpand()) {
                        //     row.getToggleExpandedHandler()()
                        //   }
                      }}
                      className={rowClass({
                        expanded: row.getIsExpanded(),
                      })}
                    >
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className={cellClass()}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>

                    {row.getIsExpanded() && (
                      <SubComponent<TData>
                        row={row}
                        //   renderSubComponent={renderSubComponent}
                      />
                    )}
                  </Fragment>
                )
              }),
            )}
        </tbody>
      </table>

      <div className="flex items-center">{pagination}</div>
    </div>
  )
}

type SubComponentProps<TData> = {
  row: Row<TData>
  renderSubComponent?: (
    row: Row<TData>,
    tableClasses: {
      cellClass: typeof cellClass
    },
  ) => ReactNode | Array<ReactNode>
}

const SubComponent = <TData,>({
  row,
  renderSubComponent,
}: SubComponentProps<TData>) => {
  return <div>{renderSubComponent?.(row, { cellClass })}</div>
}

const NoRecords = () => (
  <tr>
    <td colSpan={1000}>
      <div className="flex flex-row justify-center p-3 text-lg text-gray-400">
        No results
      </div>
    </td>
  </tr>
)
