import { SortIcon } from '@webapp/icons'
import { observer } from 'mobx-react-lite'
import { createColumnSorter } from '../model/sorter-column.model'

export const ColumnSorter = observer(
  ({
    model,
    id,
  }: {
    id: string
    model: ReturnType<typeof createColumnSorter>
  }) => {
    return (
      <button
        onClick={() => {
          model.onSorterClick(id)
        }}
      >
        <SortIcon />
      </button>
    )
  },
)
