import {
  AccessorFnColumnDef,
  ColumnDef,
  ColumnHelper,
  DisplayColumnDef,
  createColumnHelper,
} from '@tanstack/react-table'

export class ColumnBuilder<TData> {
  private readonly columnHelper: ColumnHelper<TData> =
    createColumnHelper<TData>()
  private readonly columns: Array<ColumnDef<TData>> = []

  addColumn({
    accessorFn,
    id,
    cell,
    header,
  }: Omit<AccessorFnColumnDef<TData>, 'id'> & { id: string }) {
    this.columns.push(
      this.columnHelper.accessor(accessorFn, {
        id,
        cell,
        header,
      }),
    )
    return this
  }

  addAction({
    cell,
    id,
    header,
  }: Omit<DisplayColumnDef<TData>, 'id'> & { id: string }) {
    this.columns.push(
      this.columnHelper.display({
        id,
        cell,
        header,
      }),
    )
    return this
  }

  build() {
    return this.columns
  }
}
