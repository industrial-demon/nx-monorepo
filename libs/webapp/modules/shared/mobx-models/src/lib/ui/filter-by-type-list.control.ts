import { action, computed, makeObservable, observable } from 'mobx'
import { injectable } from 'tsyringe'

import { createFilterTypeItemControl } from './filter-by-type-item.control'

type Control = ReturnType<typeof createFilterTypeItemControl>

@injectable()
export class FilterByTypeListControl<T> {
  controlsList: Array<Control> = []

  constructor() {
    makeObservable(this, {
      controlsList: observable,
      addControl: action,
      isAllOn: computed,
      allOn: action,
      filtersMap: computed,
      selectedTypes: computed,
    })
  }

  addControl(control: Control) {
    if (!this.controlsList.includes(control)) {
      this.controlsList.push(control)
    }
  }

  allOn() {
    this.controlsList.forEach(control => {
      if (control.id !== 'ALL') {
        control.checkboxControl.onCheckedChange(false)
      }
      if (control.id === 'ALL') {
        control.checkboxControl.onCheckedChange(true)
      }
    })
  }

  allOff() {
    this.controlsList
      .find(control => control.id === 'ALL')
      ?.checkboxControl.onCheckedChange(false)
  }

  get isAllOn() {
    return this.controlsList.some(
      control => control.name === 'ALL' && control.checkboxControl.checked,
    )
  }

  get filtersMap() {
    return this.controlsList.reduce(
      (acc, control) => ({
        ...acc,
        [control.name]: control.checkboxControl.checked,
      }),
      {},
    )
  }

  get selectedTypes() {
    return this.controlsList.reduce<Array<T>>(
      (acc, control) =>
        control.checkboxControl.checked && control.id !== 'ALL'
          ? [...acc, control.id as T]
          : acc,
      [],
    )
  }
}
