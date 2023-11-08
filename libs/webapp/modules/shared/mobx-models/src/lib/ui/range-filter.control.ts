import { action, makeObservable, observable } from 'mobx'
type Value = Array<number>
export class RangeFilterControl {
  value: Value = [0]

  constructor() {
    makeObservable(this, {
      value: observable,
      onValueChange: action.bound,
    })
  }

  onValueChange(value: Value) {
    this.value = value
  }
}
