import { Fragment, ForwardedRef, ReactNode } from 'react';
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  TableOptions,
  Row,
  ColumnDef,
} from '@tanstack/react-table';
import { cva, cx } from 'class-variance-authority';

import { ScrollArea } from '../ScrollArea';

type TableProps<TData> = {
  columns: Array<ColumnDef<TData>> | Array<any>;
  data: Array<TData>;
  state?: TableOptions<TData>['state'];
  getRowCanExpand?: TableOptions<TData>['getRowCanExpand'];
  onRowClick?: (row?: TData) => void;
  renderSubComponent?: SubComponentProps<TData>['renderSubComponent'];

  stickyHeader?: boolean;
  reset?: boolean;
  height?: string;
  width?: string;

  headerClassName?: HTMLTableElement['className'];
  cellClassName?: HTMLTableCellElement['className'];
  rowClassName?: HTMLTableRowElement['className'];
  tableBodyClassName?: HTMLDivElement['className'];

  paginatorControl?: ReactNode;
  pageSizeControl?: ReactNode;
  subComponentColspan?: number;
  tableRef?: ForwardedRef<HTMLDivElement> | null;
};

const headClass = cva(['thead', 'bg-white shadow-md'], {
  variants: {
    sticky: {
      true: ['sticky top-[-1px] z-20'],
      false: [''],
    },
  },
});

const bodyClass = cva([
  'table-body',
  'md:table-row-group',
  '[&>tr:nth-child(odd)]:bg-[#F8F8F8]',
  '[&>tr:nth-child(even)]:bg-white',
]);

const cellClass = cva(['table-cell', 'border border-slate-300 p-2', 'whitespace-nowrap'], {
  variants: {
    align: {
      center: ['text-center'],
      left: ['text-left'],
      right: ['text-right'],
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

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
});

const tableStyle = {
  container: 'flex flex-1 flex-col h-full',
  table: 'relative w-full border border-collapse border-slate-300',
  theadRow: 'md:border-none rounded-md ',
  th: 'border border-slate-300 text-[#7B7B7B] leading-4 text-sm font-medium whitespace-nowrap text-center p-3',
  tfoot: 'lg:justify-center p-4 md:justify-start',
};

export const Table = <TData,>({
  columns,
  data,
  state,
  getRowCanExpand,
  onRowClick,
  renderSubComponent,
  paginatorControl,
  pageSizeControl,
  stickyHeader = false,
  width = 'w-full',
  height = 'h-full',
  cellClassName,
  rowClassName,
  headerClassName,
  tableBodyClassName,
  tableRef,
}: TableProps<TData>) => {
  const table = useReactTable<TData>({
    columns,
    data,
    state: { ...state, expanded: {} },
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });
  return (
    <div className="flex flex-col">
      <ScrollArea width={width} height={height} className="pb-2">
        <div className={tableStyle.container} ref={tableRef}>
          <table className={tableStyle.table}>
            <thead
              className={headClass({
                sticky: stickyHeader,
                className: headerClassName,
              })}
            >
              {table.getHeaderGroups().map(headerGroup => {
                return (
                  <tr key={headerGroup.id} className={tableStyle.theadRow}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id} className={cx(tableStyle.th)}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                );
              })}
            </thead>
            <tbody className={bodyClass({ className: tableBodyClassName })}>
              {data?.length > 0 &&
                table.getRowModel().rows.map(row => {
                  return (
                    <Fragment key={row.id}>
                      <tr
                        onClick={() => {
                          onRowClick?.();
                          if (row.getCanExpand()) {
                            row.getToggleExpandedHandler()();
                          }
                        }}
                        className={rowClass({
                          expanded: row.getIsExpanded(),
                          className: rowClassName,
                        })}
                      >
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id} className={cellClass({ className: cellClassName })}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>

                      {row.getIsExpanded() && (
                        <SubComponent<TData> row={row} renderSubComponent={renderSubComponent} />
                      )}
                    </Fragment>
                  );
                })}

              {data?.length === 0 && <NoRecords />}
            </tbody>
          </table>
        </div>
      </ScrollArea>

      <div className="m-3 flex flex-shrink-0 items-center">
        <div>{paginatorControl}</div>
        <div>{pageSizeControl}</div>
      </div>
    </div>
  );
};

type SubComponentProps<TData> = {
  row: Row<TData>;
  renderSubComponent?: (
    row: Row<TData>,
    tableClasses: {
      cellClass: typeof cellClass;
    },
  ) => ReactNode | Array<ReactNode>;
};

const SubComponent = <TData,>({ row, renderSubComponent }: SubComponentProps<TData>) => {
  return <>{renderSubComponent?.(row, { cellClass })}</>;
};

const NoRecords = () => (
  <tr>
    <td colSpan={1000}>
      <div className="flex flex-row justify-center p-3 text-lg text-gray-400">No results</div>
    </td>
  </tr>
);
