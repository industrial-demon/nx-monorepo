import {
  TableOptions,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

export const useDataGridModel = <TData,>({
  data,
  columns,
  ...options
}: Pick<TableOptions<TData>, 'data' | 'columns' | 'state'>) => {
  return useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...options,
  })
}
