import { action, makeObservable, observable } from 'mobx'

export class ListStore<TGeneric> {
  list: Array<TGeneric> = []
  constructor() {
    makeObservable(this, {
      list: observable,
      add: action.bound,
    })
  }

  add(item: TGeneric) {
    if (this.list.includes(item)) {
      this.list.push(item)
    }
  }

  remove(item: TGeneric) {
    const index = this.list.findIndex(el => el === item)
    if (index) {
      this.list.splice(index, 1)
    }
  }
}
