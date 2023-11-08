import { GenericStore } from '@webapp/mobx-models'
import { SortingViewDtoNameEnum } from '../../../shared/api/generated/connectors'

export const createColumnSorter = () => ({
  sortedBy: new GenericStore<string>(''),
  direction: new GenericStore<SortingViewDtoNameEnum | ''>(''),
  reset() {
    this.sortedBy.set('')
    this.direction.set('')
  },
  onSorterClick(id: string) {
    switch (this.direction.get()) {
      case '':
        this.direction.set('asc')
        break
      case 'desc':
        this.direction.set('asc')
        break
      case 'asc':
        if (id === this.sortedBy.get()) {
          this.direction.set('desc')
        } else this.direction.set('asc')
        break
    }
    this.sortedBy.set(id)
  },

  get sortingParams() {
    const sortField = this.sortedBy.get()
    if (sortField === '') {
      return undefined
    }
    return {
      [sortField]: this.direction.get(),
    }
  },
})

export const columnSorter = createColumnSorter()
