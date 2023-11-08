import { action, computed, makeObservable, observable } from 'mobx'

export class ToggleGroupControl {
  multipleGroup: Map<string, string> = new Map()
  constructor() {
    makeObservable(this, {
      multipleGroup: observable,
      add: action.bound,
      remove: action.bound,
      onValueChange: action.bound,
      value: computed,
    })
  }

  add(value: string) {
    this.multipleGroup.set(value, value)
  }

  remove(value: string) {
    this.multipleGroup.delete(value)
  }

  onValueChange(values: Array<string>) {
    this.multipleGroup.clear()
    values.forEach(value => this.add(value))
  }

  get value() {
    return Array.from(this.multipleGroup, v => v[1])
  }
}
