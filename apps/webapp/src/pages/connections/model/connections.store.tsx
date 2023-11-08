import { action, makeObservable, observable } from 'mobx'
import { inject, injectable, container } from 'tsyringe'
import { FilterByTypeListControl, PaginationControl, SearchBoxControl } from '@webapp/mobx-models'
import { typeFilters } from '../config/filters.config'
import { FilterViewDtoTypeEnum } from '../../../shared/api/generated/connectors'
import { columnSorter } from '../../../features/sorter-colum'

type ColumnSorter = typeof columnSorter
@injectable()
class ConnectionsStore {
  value = ''
  constructor(
    @inject(FilterByTypeListControl)
    public readonly filterByTypeControl: FilterByTypeListControl<FilterViewDtoTypeEnum>,
    @inject(SearchBoxControl)
    public readonly searchBoxControl: SearchBoxControl,
    @inject('columnSorter')
    public readonly columnSorter: ColumnSorter,
    @inject(PaginationControl)
    public readonly pagination: PaginationControl
  ) {
    makeObservable(this, {
      value: observable,
      setValue: action.bound,
    })
  }

  public onInit() {
    typeFilters.forEach(control => {
      this.filterByTypeControl.addControl(control)
    })
  }

  setValue(value: string) {
    this.value = value
  }
}
container.beforeResolution('columnSorter', () => {
  columnSorter.reset()
})

container.afterResolution(ConnectionsStore, (_, store) => {
  ;(store as ConnectionsStore).onInit()
})

container.register('columnSorter', { useValue: columnSorter })

export { container as IoCConnectionsContainer, ConnectionsStore }
